import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const bufferPolyfill = {
  name: 'buffer-polyfill',
  resolveId(id) {
    if (id === 'virtual-buffer-polyfill') {
      return id;
    }
  },
  load(id) {
    if (id === 'virtual-buffer-polyfill') {
      return `globalThis.Buffer = globalThis.Buffer || {from:(s)=>({toString:()=>s,[Symbol.toStringTag]:"Buffer"}),isBuffer:(o)=>o&&o[Symbol.toStringTag]==="Buffer"}`;
    }
  },
};

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      bufferPolyfill,
      mdx({
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ],
      }),
      react(),
      tailwindcss(),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
