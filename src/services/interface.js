import {
	ajax,
	askDialogToast,
	sessionStorage
} from '@/utils';

import * as config from '@/config.js';

const baseURL = config.BASE_URL;
let LOT_ID = (()=>{
	let _r = sessionStorage.getItem('lot_id');
	return _r ? _r : '';
})();

export class Product {
	all(){
		return this._ajax('get')
	}
	once(id){
		return this._ajax('get',{},id);
	}
	create(options){
		return this._ajax('post',options);
	}
	update(options){
		return this._ajax('put',options,options._id);
	}
	del(id){
		return this._ajax('delete',{},id);
	}
	_ajax(method,options,id){
		options = options || {};
		return ajax({
			method: method,
			url:`${baseURL}/products${id !== void 0 ? '/'+id:''}`,
			data: options,
			before: (r) => {
			},
			complete: (r) => {
			}
		});
	}
}
export class Manufacturer{
	all(){
		return this._ajax('get');
	}
	create(options){
		return this._ajax('post',options);
	}
	update(options){
		return this._ajax('put',options,options._id);
	}
	del(id){
		return this._ajax('delete',{},id);
	}
	_ajax(method,options,id){
		options = options || {};
		return ajax({
			method: method,
			url:`${baseURL}/manufacturer${id !== void 0 ? '/'+id:''}`,
			data: options,
			before: (r) => {
			},
			complete: (r) => {
			}
		});
	}
}


export class Cart{
	all(){
		return this._ajax('get');
	}
	add(options){
		return this._ajax('post',options);
	}
	remove(id){
		return this._ajax('delete',{},id);
	}
	_ajax(method,options,id){
		options = options || {};
		return ajax({
			method: method,
			url:`${baseURL}/cart${id !== void 0 ? '/'+id:''}`,
			data: options,
			before: (r) => {
			},
			complete: (r) => {
			}
		});
	}
}