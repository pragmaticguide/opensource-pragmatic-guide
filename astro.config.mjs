import { defineConfig } from 'astro/config';
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs "

// https://astro.build/config
export default defineConfig({
  site: 'https://pragmatic-guide.linux.cn',
  integrations: [],
  markdown:{
    remarkPlugins:[remarkModifiedTime],
  }
});