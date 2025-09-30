import { ConfigMaker } from 'config-maker';

export type ProjectOptions = {
  urlOrPath: string;
  esModule?: boolean;
  deno?: boolean;
  headers?: {
    [x: string]: string;
  };
  typedDocumentNode?: boolean;
  jsonSchema?: string;
  method?: string;
  node?: boolean;
  subscriptions?: string;
  graphql?: string;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const config = new ConfigMaker<ProjectOptions>('graphql-zeus', {
  decoders: {},
  defaultValues: {
    esModule: false,
    deno: false,
    method: 'POST',
    headers: {},
    node: false,
    typedDocumentNode: false,
  },
  config: {
    autocomplete: {
      method: async () => {
        return ['GET', 'POST'];
      },
    },
    environment: {
      urlOrPath: 'ZEUS_SCHEMA',
    },
  },
});
