import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";

import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite 配置
    define: {
      __APP_ENV__: env.APP_ENV // vite默认不加载.env文件，需配置__APP_ENV__: env.APP_ENV
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      vueJsx()
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },
    server: {
      port: 5173,
      proxy: {
        "/api": {
          target: "http://httpbin.org",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    },
    esbuild: {
      jsxFactory: "h",
      jsxFragment: "Fragment",
      jsxInject: `import React from 'react'`
    }
  };
});
