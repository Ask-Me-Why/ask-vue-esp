/*
 * @Author: askMeWhy
 * @Date:   2017-09-20 15:27:05
 * @Last Modified by:   bigWave
 * @Last Modified time: 2017-11-07 15:40:59
 */
import { Product, Manufacturer,Cart } from '../services';

import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESS,
	PRODUCT_BY_ID,
	PRODUCT_BY_ID_SUCCESS,
	UPDATE_PRODUCT,
	UPDATE_PRODUCT_SUCCESS,
	REMOVE_PRODUCT,
	REMOVE_PRODUCT_SUCCESS,
	ALL_PRODUCTS,
	ALL_PRODUCTS_SUCCESS,
	ALL_MANUFACTURERS,
	ALL_MANUFACTURERS_SUCCESS,
	ADD_MANUFACTURERS,
	ADD_MANUFACTURERS_SUCCESS,
	UPDATE_MANUFACTURERS,
	UPDATE_MANUFACTURERS_SUCCESS,
	REMOVE_MANUFACTURERS,
	REMOVE_MANUFACTURERS_SUCCESS,
	ALL_CART,
	ALL_CART_SUCCESS,
	ADD_TO_CART,
	ADD_TO_CART_SUCCESS,
	REMOVE_FROM_CART,
	REMOVE_FROM_CART_SUCCESS,
	ERROR_MSG
} from './mutations-types';

const productServer = new Product();
export const productActions = {
	allProducts({ commit }) {
		commit(ALL_PRODUCTS);
		productServer.all().then(r => {
			commit(ALL_PRODUCTS_SUCCESS, r.data);
		},error=>{
			commit(ERROR_MSG, {
				type: 'error',
				title: 'ajax',
				msg: error
			});
		})
	},
	productById({ commit }, payload) {
		commit(PRODUCT_BY_ID);
		productServer.once(payload).then(r => {
			commit(PRODUCT_BY_ID_SUCCESS, r.data);
		},error=>{
			commit(ERROR_MSG, {
				type: 'error',
				title: 'ajax',
				msg: error
			});
		})
	},
	addProduct({ commit }, payload) {
		commit(ADD_PRODUCT);
		productServer.create(payload).then(r => {
			commit(ADD_PRODUCT_SUCCESS, r.data);
		},error=>{
			commit(ERROR_MSG, {
				type: 'error',
				title: 'ajax',
				msg: error
			});
		})
	},
	updateProduct({ commit }, payload) {
		commit(UPDATE_PRODUCT);
		productServer.update(payload).then(r => {
			commit(UPDATE_PRODUCT_SUCCESS, r.data);
		},error=>{
			commit(ERROR_MSG, {
				type: 'error',
				title: 'ajax',
				msg: error
			});
		})
	},
	removeProduct({ commit }, payload) {
		commit(REMOVE_PRODUCT);
		productServer.del(payload._id).then(r => {
			commit(REMOVE_PRODUCT_SUCCESS, payload);
		},error=>{
			commit(ERROR_MSG, {
				type: 'error',
				title: 'ajax',
				msg: error
			});
		})
	}
}

const manufacturerServer = new Manufacturer();
export const manufacturerActions = {
	allManufacturers({ commit }) {
		commit(ALL_MANUFACTURERS);
		manufacturerServer.all().then(r => {
			commit(ALL_MANUFACTURERS_SUCCESS, r.data);
		},error=>{
			commit(ERROR_MSG, {
				type: 'error',
				title: 'ajax',
				msg: error
			});
		})
	},
	addManufacturer({ commit }, payload) {
		commit(ADD_MANUFACTURERS);
		manufacturerServer.create(payload).then(r => {
			commit(ADD_MANUFACTURERS_SUCCESS, r.data.data);
		},error=>{
			commit(ERROR_MSG, {
				type: 'error',
				title: 'ajax',
				msg: error
			});
		})
	},
	updateManufacturer({ commit }, payload) {
		commit(UPDATE_MANUFACTURERS);
		manufacturerServer.update(payload).then(r => {
			commit(UPDATE_MANUFACTURERS_SUCCESS, r.data);
		},error=>{
			commit(ERROR_MSG, {
				type: 'error',
				title: 'ajax',
				msg: error
			});
		})
	},
	removeManufacturer({ commit }, payload) {
		commit(REMOVE_MANUFACTURERS);
		manufacturerServer.del(payload._id).then(r => {
			commit(REMOVE_MANUFACTURERS_SUCCESS, payload);
		},error=>{
			commit(ERROR_MSG, {
				type: 'error',
				title: 'ajax',
				msg: error
			});
		})
	}
}

const cartServer = new Cart();
export const cartActions = {
	allCart({ commit }) {
		commit(ALL_CART);
		cartServer.all().then(r => {
			commit(ALL_CART_SUCCESS, r.data);
		},error=>{
			commit(ERROR_MSG, {
				type: 'error',
				title: 'ajax',
				msg: error
			});
		})
	},
	addCart({ commit }, payload) {
		commit(ADD_TO_CART);
		cartServer.add({'product':payload._id}).then(r => {
			commit(ADD_TO_CART_SUCCESS, r.data);
		},error=>{
			commit(ERROR_MSG, {
				type: 'error',
				title: 'ajax',
				msg: error
			});
		})
	},
	removeCart({ commit }, payload) {
		commit(REMOVE_FROM_CART);
		cartServer.remove(payload._id).then(r => {
			commit(REMOVE_FROM_CART_SUCCESS, payload);
		},error=>{
			commit(ERROR_MSG, {
				type: 'error',
				title: 'ajax',
				msg: error
			});
		})
	}
}
