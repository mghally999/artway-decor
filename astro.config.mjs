import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import path from "node:path";
import sharp from "sharp";
import config from "./src/config/config.json";

export default defineConfig({
  site: config.site.base_url
    ? config.site.base_url
    : "https://nextspace-astro.vercel.app",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: { service: sharp() },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: [
        // ✅ match YOUR tsconfig paths exactly
        {
          find: "@/components",
          replacement: path.resolve("./src/layouts/components"),
        },
        {
          find: "@/shortcodes",
          replacement: path.resolve("./src/layouts/shortcodes"),
        },
        {
          find: "@/helpers",
          replacement: path.resolve("./src/layouts/helpers"),
        },
        {
          find: "@/partials",
          replacement: path.resolve("./src/layouts/partials"),
        },

        // ✅ keep this last (generic)
        { find: "@", replacement: path.resolve("./src") },
      ],
    },
  },

  integrations: [
    react(),
    sitemap(),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});
