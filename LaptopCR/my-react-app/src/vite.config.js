import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // Allows access from any device on the network
    port: 5173, // Use the same port as the one you're using
  },
});
