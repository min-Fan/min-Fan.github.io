import { defineConfig } from "umi";
const { UMI_ENV = '' } = process.env;

function OutputPathName(env: string) {
  if (env) {
    return `${env}-dist`
  }
  return 'dist'

}

export default defineConfig({
  routes: [
    // { path: '/', redirect: '/' },
    { path: "/", component: "index" },
  ],
  favicons: [],
  title: 'Ex FE',
  npmClient: 'pnpm',
  outputPath: OutputPathName(UMI_ENV),
  extraPostCSSPlugins: [require("tailwindcss"), require("autoprefixer")],
});
