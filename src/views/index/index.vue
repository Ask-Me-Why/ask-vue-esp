<template>
	<div class="esp-container">
		<div class="title">
			<img src="~@/assets/logo.png" alt="logo">
			<h1>ASK Stock</h1>
			<h2>{{mes}}</h2>
		</div>
		<product-list></product-list>
	</div>
</template>
<script>
	import { Product } from '@/services';
	import {askDialogAlert} from '@/utils';
	import productList from '@core/product/product-list.vue';
	export default{
		name:'home',
		components:{
			'product-list':productList
		},
		data(){
			return {
				mes: ""
			}
		},
		mounted(){
			this.mes = navigator.userAgent;
		}
	}
</script>