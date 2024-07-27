import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			// 路径别名
			'@': path.resolve(__dirname, 'src')
		}
	},
	css: {// vite项目对sass的z
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@/styles/variables.scss";',
				javascriptEnabled: true
			}
		}
	}
});
