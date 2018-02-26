import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index/index'
import detail from '@/views/detail/detail'
import cart from '@/views/cart/cart'
import ADMIN_ROUTERS from './admin.js';

const APP_ROUTERS = [{
		path: '/',
		name: 'index',
		component: index,
		meta: { title: 'Ask-Me-Why', active: 'index' }
	},
	{
		path: '/detail/:id',
		name: 'detail',
		component: detail,
		meta: { title: '商品详情', active: 'index' }
	},
	{
		path: '/cart',
		name: 'cart',
		component: cart,
		meta: { title: '购物车', active: 'cart' }
	},
	ADMIN_ROUTERS
];

Vue.use(Router)
export default new Router({
	// mode: 'history',
	routes: APP_ROUTERS
})
