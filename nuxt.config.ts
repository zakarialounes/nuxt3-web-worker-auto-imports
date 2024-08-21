import { aliasConf as alias } from './runtime-config/alias.conf';
import { viteConf as vite } from './runtime-config/vite.conf';
import { importsConf as imports } from './runtime-config/imports.conf';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-06',
  devtools: {
    enabled: true,
  },
  alias,
  vite, // without worker config, auto imports are not working (even the one from ./composables)
  imports,
});
