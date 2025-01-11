import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000, // You can customize the port
    open: true, // Automatically open the browser
  },
  esbuild: {
    loader: 'jsx', // Ensure JSX is processed correctly
    include: /src\/.*\.jsx?$/, // Include .js and .jsx files in src folder
    exclude: /node_modules/, // Exclude node_modules
  },
});
