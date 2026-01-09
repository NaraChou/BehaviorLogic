import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  // 載入環境變數
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // 伺服器設定
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    // 基本路徑設定，解決 GitHub Pages 空白問題
    base: './',
    plugins: [react()],
    // 定義全局變數
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    // 路徑別名設定
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});