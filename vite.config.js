import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  test: {
    globals: true
  },
  build: {
    outDir: 'dist-dev' // Specify the output directory for the build files
  }
});
