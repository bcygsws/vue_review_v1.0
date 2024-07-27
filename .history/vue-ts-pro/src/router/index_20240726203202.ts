/*
 * @Description:
 * @Version:
 * @Author: bcygsws@163.com
 * @Date: 2024-07-26 20:10:03
 * @LastEditors: Bao Chengyi
 * @LastEditTime: 2024-07-26 20:13:33
 * @description：vue3路由配置
 *
 *
 */
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
	{
		path: '/',
		redirect: '/home',
		children: [
			{
				path: '/home',
				component: () => import('@/views/HomeView.vue')
			},
      {
				path: '/ab',
				component: () => import('@/views/HomeView.vue')
			}
		]
	}
];
const router = createRouter({
	history: createWebHistory(),
	routes
});
export default router;
