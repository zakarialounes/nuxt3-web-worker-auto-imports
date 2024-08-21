import { fileURLToPath } from 'node:url';

export const aliasConf = {
  '~': fileURLToPath(new URL('./../', import.meta.url)),
  '@': fileURLToPath(new URL('./../', import.meta.url)),
};
