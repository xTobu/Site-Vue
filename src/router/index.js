import Vue from 'vue';
import VueRouter from 'vue-router';

//slot
import slotIndex from '../pages/slot/Index';
import slotPost from '../pages/slot/Post';
import slotAbout from '../pages/slot/About';
import slotCount from '../pages/slot/Count';
//https://ithelp.ithome.com.tw/articles/10185164

import Login from '../pages/Login';
import Index from '../pages/Index';
import About from '../pages/About';
import Count from '../pages/Count';
import Index_backup from '../pages/Index_backup';
// init
/* Layout */
import Layout from '../layouts/default';

Vue.use(VueRouter);

const constantRouterMap = [
	{
		path: '/Login',
        component: Login,
        meta: {
            title: 'Login',
            noCache: true,
        },
		//hidden: true
	},
	{
		path: '',
		component: Layout,
		redirect: 'Index',
		children: [
			{
				path: 'Index',
				component: Index,
				name: 'Index',
				meta: {
					title: 'Index',
					noCache: true,
				},
			},
			{
				path: 'About',
				component: About,
				name: 'About',
				meta: {
					title: 'About',
					noCache: true,
				},
            },
            {
				path: 'Count',
				component: Count,
				name: 'Count',
				meta: {
					title: 'Count',
					noCache: true,
				},
			},
		],
	},
	{
		path: '/Index_backup',
		name: 'Index_backup',
		component: Index_backup,
	},

	//slot
	{
		path: '/slot/',
		name: 'slotIndex',
		component: slotIndex,
	},
	{
		path: '/slot/about/:id',
		name: 'slotAbout',
		component: slotAbout,
		children: [
			{
				// 当 /about/:id/post 匹配成功， Post 会被渲染在 about 的 <router-view> 中
				path: 'post',
				component: slotPost,
			},
		],
	},
	// about router 轉址
	{
		path: '/slot/about',
		redirect: '/slot/about/0',
	},
	{
		path: '/slot/post/',
		name: 'slotPost',
		component: slotPost,
	},
	{
		path: '/slot/count',
		name: 'slotCount',
		component: slotCount,
	},

	// router 轉址
	{
		path: '/*',
		redirect: '/',
	},
];
const router = new VueRouter({
	// https://router.vuejs.org/zh-cn/api/options.html 使用 HTML 5 模式 mode: 'history',
	// base: __dirname, routre 表

	routes: constantRouterMap,
});
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
        document.title = to.meta.title;
       
    }
    next();
});

export default router;
