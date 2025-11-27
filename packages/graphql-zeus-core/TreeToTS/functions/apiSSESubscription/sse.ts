import { chainOptions } from '@/TreeToTS/functions/new/models';

export const apiSubscriptionSSE = (options: chainOptions) => (query: string, variables?: Record<string, unknown>) => {
  const url = options[0];
  const fetchOptions = options[1] || {};

  let abortController: AbortController | null = null;
  let reader: ReadableStreamDefaultReader<Uint8Array> | null = null;
  let onCallback: ((args: unknown) => void) | null = null;
  let errorCallback: ((args: unknown) => void) | null = null;
  let openCallback: (() => void) | null = null;
  let offCallback: ((args: unknown) => void) | null = null;

  const startStream = async () => {
    try {
      abortController = new AbortController();

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'text/event-stream',
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          ...fetchOptions.headers,
        },
        body: JSON.stringify({ query, variables }),
        signal: abortController.signal,
        ...fetchOptions,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (openCallback) {
        openCallback();
      }

      reader = response.body?.getReader() || null;
      if (!reader) {
        throw new Error('No response body');
      }

      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          if (offCallback) {
            offCallback({ data: null, code: 1000, reason: 'Stream completed' });
          }
          break;
        }

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = line.slice(6);
              const parsed = JSON.parse(data);

              if (parsed.errors) {
                if (errorCallback) {
                  errorCallback({ data: parsed.data, errors: parsed.errors });
                }
              } else if (onCallback && parsed.data) {
                onCallback(parsed.data);
              }
            } catch {
              if (errorCallback) {
                errorCallback({ errors: ['Failed to parse SSE data'] });
              }
            }
          }
        }
      }
    } catch (err: unknown) {
      const error = err as Error;
      if (error.name !== 'AbortError' && errorCallback) {
        errorCallback({ errors: [error.message || 'Unknown error'] });
      }
    }
  };

  return {
    on: (e: (args: unknown) => void) => {
      onCallback = e;
    },
    off: (e: (args: unknown) => void) => {
      offCallback = e;
    },
    error: (e: (args: unknown) => void) => {
      errorCallback = e;
    },
    open: (e?: () => void) => {
      if (e) {
        openCallback = e;
      }
      startStream();
    },
    close: () => {
      // Cancel the reader first (if it exists) to gracefully close the stream
      if (reader) {
        reader.cancel().catch(() => {
          // Ignore cancel errors - stream may already be closed
        });
        reader = null;
      }
      // Then abort the controller
      if (abortController) {
        abortController.abort();
        abortController = null;
      }
    },
  };
};
