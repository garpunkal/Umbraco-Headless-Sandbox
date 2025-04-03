import { defineConfig, squooshImageService } from 'astro/config';
import { setDefaultResultOrder } from 'dns';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';
import robotsTxt from "astro-robots-txt";
import favicons from "astro-favicons";
import vercel from '@astrojs/vercel/serverless';
import mkcert from 'vite-plugin-mkcert'
import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

setDefaultResultOrder('verbatim')

export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
    edgeMiddleware: true,
  }),
  site: 'https://localhost:4321',
  prefetch: true,
  image: {
    service: squooshImageService(),
    domains: [
      "res.cloudinary.com",
      "cloud.squidex.io"
    ],
  },
  vite: {
    build: {
      rollupOptions: {
        input: './src/scripts/main.ts',
        preserveEntrySignatures: "exports-only",
        output: {
          entryFileNames: "main.js",
          format: "es"
        },
      },
      productionSourceMap: false,
      modulePreload: {
        polyfill: true
      }
    },
    server: {
      https: true
    },
    plugins: [mkcert()],
    resolve: {
      alias: {
        '@layouts': '/src/layouts',
        '@components': '/src/components',
        '@scripts': '/src/scripts',
        '@styles': '/src/styles',
      }
    }
  },
  server: {
    origin: "https://localhost:4321",
    hmr: {
      protocol: 'wss',
    },
    open: true,
    headers: {
      'cache-control': 'no-cache, no-store',
      'strict-transport-security': 'max-age=31536000; preload',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'SAMEORIGIN',
      'x-xss-protection': '1; mode=block'
    },
    fs: {
      allow: [
        '..'
      ],
    },
  },
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt({
      sitemap: ['https://localhost:4321/sitemap-index.xml']
    }),
    favicons({
      masterPicture: "public/favicon.png",
      emitAssets: true,
      appName: "https://localhost:4321/",
      appShortName: "https://localhost:4321/",
      appDescription: "https://localhost:4321/",
      lang: "en-GB",
      background: "#9EB900",
      theme_color: "#9EB900",
      faviconsDarkMode: false,
      manifestMaskable: true
    })
  ]
});  