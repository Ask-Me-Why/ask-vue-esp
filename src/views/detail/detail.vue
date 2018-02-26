<template>
	<div class="esp-container">
		<!-- <div class="title boundary">
			<img src="~@/assets/logo.png" alt="logo">
			<h1>Detail</h1>
		</div> -->
		<product-detail :product="product"></product-detail>
	</div>
</template>
<script>
import productDetail from '@core/product/product-detail.vue';
export default {
	name: 'detail',
	components:{
		'product-detail':productDetail
	},
	computed: {
		product() {
			return this.$store.getters.productById(this.$route.params['id']);
		}
	},
	created() {
		if (!this.product.name) {
			this.$store.dispatch('productById', this.$route.params['id'])
		}
	}
}

</script>
