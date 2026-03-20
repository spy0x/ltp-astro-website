import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://spy0x.github.io/CoderHouse-DesarrolloWeb/",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});