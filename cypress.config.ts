import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      // implement node event listeners here
      on("file:preprocessor", vitePreprocessor());
    },
    experimentalStudio: true,
    baseUrl: "http://localhost:3000",
  },
});
