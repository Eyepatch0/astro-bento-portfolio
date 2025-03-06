import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon({
      include: {
        "simple-icons": ["*"],
      },
    }),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",

  adapter: netlify({ edgeMiddleware: true }),
  vite: {
    assetsInclude: "**/*.riv",
  },
});
