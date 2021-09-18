export default `
export const apiSubscription = (options) => (
    query,
  ) => {
    try {
      const WebSocket = require('ws')
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e) => {
          ws.onmessage = (event) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
              return e(data);
            }
          };
        },
        off: (e) => {
          ws.onclose = e;
        },
        error: (e) => {
          ws.onerror = e;
        },
        open: (e) => {
          ws.onopen = e;
        },
      };
    } catch {
      throw new Error('No websockets implemented. Install ws or switch to browser');
    }
  };
`;
