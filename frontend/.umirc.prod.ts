import { defineConfig } from "umi";

export default defineConfig({
  define: {
    "process.env": {
      UMI_ENV: "prod",
      UMI_AXIOS_API_URL: "https://",
      UMI_CHAINID: "11155111",
    },
  },
});
