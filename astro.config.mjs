import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

const isStatic = process.env.PLATFORM == 'static';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: isStatic ? "static" : "server",
  adapter: isStatic ? undefined : vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});