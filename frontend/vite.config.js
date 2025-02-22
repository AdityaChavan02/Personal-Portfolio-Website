// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // ✅ Alias for /src
    },
  },
  server: {
    port: 3000, // ✅ Customize the port
    open: true, // ✅ Automatically open the browser
  },
  esbuild: {
    loader: 'jsx', // ✅ Ensure JSX is processed correctly
    include: /src\/.*\.jsx?$/, // ✅ Include .js and .jsx files in src folder
    exclude: /node_modules/, // ✅ Exclude node_modules
  },
  build: {
    rollupOptions: {
      external: [], // ✅ Ensure all dependencies are bundled correctly
    },
    commonjsOptions: {
      transformMixedEsModules: true, // ✅ Allow processing of mixed ES modules
    },
  },
  optimizeDeps: {
    include: ['three', '@react-three/drei', '@react-three/fiber'], // ✅ Pre-bundle these dependencies
  },
});
