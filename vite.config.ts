import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: 'environments',
  publicDir: 'public',
  server: {
    port: 1994,
    host: 'localhost',
    strictPort: true,
  },
  preview: {
    port: 31000,
    host: 'localhost',
  }
})
