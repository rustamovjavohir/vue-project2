import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, RegisterView, LoginView, ArticleDetailView, CreateFormView } from '@/views/'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView,
		},
		{
			path: '/register',
			name: 'register',
			component: RegisterView,
		},
		{
			path: '/article/:slug',
			name: 'article-details',
			component: ArticleDetailView,
		},
		{
			path: '/create-atricle',
			name: 'create-atricle',
			component: CreateFormView,
		},

	]
})

export default router