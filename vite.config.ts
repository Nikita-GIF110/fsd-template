import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: path.resolve(__dirname, "./src/app"),
      assets: path.resolve(__dirname, "./src/assets"),
      entities: path.resolve(__dirname, "./src/entities"),
      features: path.resolve(__dirname, "./src/features"),
      pages: path.resolve(__dirname, "./src/pages"),
      shared: path.resolve(__dirname, "./src/shared"),
    },
  },
});
