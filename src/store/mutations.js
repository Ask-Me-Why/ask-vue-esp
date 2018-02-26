/*
 * @Author: askMeWhy
 * @Date:   2017-09-20 14:57:30
 * @Last Modified by:   bigWave
 * @Last Modified time: 2017-11-07 15:37:03
 */
import {
	ADD_PRODUCT,
	ADD_PRODUCT_SUCCESS,
	PRODUCT_BY_ID,
	PRODUCT_BY_ID_SUCCESS,
	UPDATE_PRODUCT,
	UPDATE_PRODUCT_SUCCESS,
	REMOVE_PRODUCT,
	REMOVE_PRODUCT_SUCCESS,
	ALL_CART,
	ALL_CART_SUCCESS,
	ADD_TO_CART,
	ADD_TO_CART_SUCCESS,
	REMOVE_FROM_CART,
	REMOVE_FROM_CART_SUCCESS,
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
	ERROR_MSG
} from './mutations-types';

export const productMutations = {
	[ALL_PRODUCTS](state) {
		state.showLoader = true;
		state.showIndex++;
	},
	[ALL_PRODUCTS_SUCCESS](state, payload) {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
		state.products = payload;
	},
	[PRODUCT_BY_ID](state) {
		state.showLoader = true;
		state.showIndex++;
	},
	[PRODUCT_BY_ID_SUCCESS](state, payload) {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
		state.product = payload;
	},
	[ADD_PRODUCT]: (state, payload) => {
		state.showLoader = true;
		state.showIndex++;
	},
	[ADD_PRODUCT_SUCCESS]: (state, payload) => {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
		state.products.push(payload);
	},
	[UPDATE_PRODUCT]: (state, payload) => {
		state.showLoader = true;
		state.showIndex++;
	},
	[UPDATE_PRODUCT_SUCCESS]: (state, payload) => {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
		state.product = {...payload,manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer)[0]};
		state.products = state.products.map(p => {
			if (p._id = payload._id) {
				payload = { ...payload, manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer)[0] }
				return payload;
			}
			return p;
		})
	},
	[REMOVE_PRODUCT]: (state, payload) => {
		state.showLoader = true;
		state.showIndex++;
	},
	[REMOVE_PRODUCT_SUCCESS]: (state, payload) => {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
		const index = state.products.findIndex(p => p._id === payload._id);
		state.products.splice(index, 1);
	},
	[ERROR_MSG] (state, payload) {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
	}
}

export const cartMutations = {
	[ALL_CART]: (state) =>{
		state.showLoader = true;
		state.showIndex++;
	},
	[ALL_CART_SUCCESS]: (state, payload) => {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
		state.cart = payload;
	},
	[ADD_TO_CART]: (state) =>{
		state.showLoader = true;
		state.showIndex++;
	},
	[ADD_TO_CART_SUCCESS]: (state, payload) => {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
		state.cart.push(payload);
	},
	[REMOVE_FROM_CART]: (state, payload) => {
		state.showLoader = true;
		state.showIndex++;
	},
	[REMOVE_FROM_CART_SUCCESS]: (state, payload) => {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
		const index = state.cart.findIndex(p => p._id == payload._id);
		state.cart.splice(index, 1);
	}
}

export const manufacturerMutations = {
	[ALL_MANUFACTURERS](state) {
		state.showLoader = true;
		state.showIndex++;
	},
	[ALL_MANUFACTURERS_SUCCESS](state, payload) {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
		state.manufacturers = payload;
	},
	[ADD_MANUFACTURERS]: (state, payload) => {
		state.showLoader = true;
		state.showIndex++;
	},
	[ADD_MANUFACTURERS_SUCCESS]: (state, payload) => {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
		state.manufacturers.push(payload);
	},
	[UPDATE_MANUFACTURERS]: (state, payload) => {
		state.showLoader = true;
		state.showIndex++;
	},
	[UPDATE_MANUFACTURERS_SUCCESS]: (state, payload) => {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
		state.manufacturers = state.manufacturers.map(p => {
			if (p._id == payload._id) {
				payload = { ...payload};
				return payload;
			}
			return p;
		})
	},
	[REMOVE_MANUFACTURERS]: (state, payload) => {
		state.showLoader = true;
		state.showIndex++;
	},
	[REMOVE_MANUFACTURERS_SUCCESS]: (state, payload) => {
		state.showIndex--;
		if(state.showIndex === 0){
			state.showLoader = false;
		}
		const index = state.manufacturers.findIndex(p => p._id === payload._id);
		state.manufacturers.splice(index, 1);
	}
}
