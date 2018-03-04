import Vue from 'vue';
import store from '../store';
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
// init
/* Layout */
import Layout from '../layouts/default';

Vue.use(VueRouter);

const constantRouterMap = [
	{
		path: '/Login',
		name: 'Login',
		component: Login,
		meta: {
			title: 'Login',
			noCache: true,
		},
		//hidden: true
	},
	{
		path: '/',
		component: Layout,
		//導去登入頁
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
	// 當 url path 不符合 router 表的時候，預設轉址到
	// 順序一定要最後面
	{
		path: '/*',
		redirect: '/Login',
	},
];
const router = new VueRouter({
	// https://router.vuejs.org/zh-cn/api/options.html 使用 HTML 5 模式 mode: 'history',
	// base: __dirname, routre 表

	routes: constantRouterMap,
});
router.beforeEach((to, from, next) => {
	//判斷META
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	let token = window.localStorage.getItem('token');
	//let user = JSON.parse(window.localStorage.getItem('auth-user'))
	// console.log('token:',store.state.auth.token)
	//console.log(to.fullPath, from.fullPath);


	if (
		to.matched.some(record => {
			console.log(record.path);
			if (record.name !== 'Login') {
				return true;
			}
		})
	) {
		console.log('不是Login');

		if (!store.state.auth.token) {
			// 如果沒有 token
			console.log('token?', store.state.auth.token);
			// 轉跳到 login page
			next({ path: '/Login' });
			//router.push({ path: "Login"})
        }
        else{
            next();
        }
    }
    else {
        next();
    }

});

export default router;
