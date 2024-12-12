import eslint from "vite-plugin-eslint";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      emitWarning: true, // Show ESLint warnings in the terminal
      emitError: true, // Show ESLint errors in the terminal
      failOnError: false, // Keep dev server running despite ESLint errors
      failOnWarning: false, // Keep dev server running despite ESLint warnings
    }),
  ],
});
