/*
* @Author: askMeWhy
* @Date:   2017-09-20 11:54:05
* @Last Modified by:   bigWave
* @Last Modified time: 2017-11-06 15:56:18
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
// import { productGetters,manufacturerGetters,cartGetters } from './getters';
import * as getters from './getters';
// import { productMutations, cartMutations, manufacturerMutations } from './mutations';
import * as mutations from './mutations';
// import { productActions,manufacturerActions} from './actions';
import * as actions from './actions';

const storeGetters = ()=>{
	let obj = {};
	Object.keys(getters).forEach((key) => {
	    Object.assign(obj,getters[key]);
	})
	return obj;
}
const storeMutations = ()=>{
	let obj = {};
	Object.keys(mutations).forEach((key) => {
	    Object.assign(obj,mutations[key]);
	})
	return obj;
}
const storeActions = ()=>{
	let obj = {};
	Object.keys(actions).forEach((key) => {
	    Object.assign(obj,actions[key]);
	})
	return obj;
}


export default new Vuex.Store({
	strict: true,
	state: {
		cart:[],
		// ajax loader
		showLoader:false,
		showIndex: 0,
		// selected product
		product: {},
		// all products
		products:[],
		// all manufacturer
		manufacturers:[],
	},
	getters:storeGetters(),
	mutations: storeMutations(),
	actions: storeActions()
})