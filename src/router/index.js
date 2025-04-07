import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '@/router/IndexPage.vue';
import SecondPage from '@/router/SecondPage.vue';

const routes = [
	{
		path: '/',
		name: 'index',
		component: IndexPage,
	},
	{
		path: '/second',
		name: 'second',
		component: SecondPage,
	},
];

if (import.meta.env.DEV) {
	routes.push({ path: '/pixelperfect' });
}

routes.push({
	path: '/:catchAll(.*)',
	redirect: '/',
});

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
