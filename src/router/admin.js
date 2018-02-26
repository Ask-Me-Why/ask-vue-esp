/*
* @Author: askMeWhy
* @Date:   2017-10-17 11:24:32
* @Last Modified by:   bigWave
* @Last Modified time: 2017-11-07 14:50:02
*/
import admin from '@/views/admin/admin';
import product from '@/views/admin/product';
import pNew from '@/views/admin/new';
import pEdit from '@/views/admin/edit';
import manufacturer from '@/views/admin/manufacturer';

export default {
	path:'/admin',
	component: admin,
	children :[
		{
			path:'',
			component: product,
			name:'admin-product',
			meta: { title: '管理-产品列表', active: 'admin',admin: 'product' }
		},
		{
			path:'new',
			component: pNew,
			name:'admin-pnew',
			meta: { title: '管理-添加产品', active: 'admin',admin: 'product' }
		},
		{
			path:'edit/:id',
			component: pEdit,
			name:'admin-pedit',
			meta: { title: '管理-编辑产品', active: 'admin',admin: 'product' }
		},
		{
			path:'mft',
			component: manufacturer,
			name:'admin-mft',
			meta: { title: '管理-制造商列表', active: 'admin',admin: 'manufacturer' }
		}
	]
}