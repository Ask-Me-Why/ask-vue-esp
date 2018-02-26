/*
* @Author: askMeWhy
* @Date:   2017-09-20 14:43:37
* @Last Modified by:   bigWave
* @Last Modified time: 2017-11-06 17:46:57
*/
export const productGetters = {

	allProducts(state,getters){
		return state.products;
	},
	productById:(state,getters)=>id=>{
		if(getters.allProducts.length > 0){
			return getters.allProducts.filter(p=> p._id === id)[0]
		}else{
			return state.product;
		}
	}
}

export const manufacturerGetters = {
	allManufacturers: state=> state.manufacturers
}

export const cartGetters = {
	allCart(state,getters){
		return state.cart;
	}
}