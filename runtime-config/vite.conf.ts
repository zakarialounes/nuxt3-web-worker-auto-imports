import AutoImport from 'unplugin-auto-import/vite';
import { importsConf as imports } from './imports.conf';

export const viteConf = {
  worker: {
    plugins: () => [
      AutoImport({
        viteOptimizeDeps: true,
        include: [/\.[tj]sx?$/],
        imports: ['vue'],
        dirs: imports.dirs, // allow to fix own auto imports (not nuxt stuff)
      }),
    ],
  },
};
