<template>
	<div class="admin-eidt">
		<product-form :model="model" :manufacturers="manufacturers" :isEdit="true" @save-product="updateProduct"></product-form>
	</div>
</template>
<script>
import productForm from '@core/product/product-form.vue';
export default {
	name: 'edit',
	components: {
		'product-form': productForm
	},
	computed: {
		product() {
			return this.$store.getters.productById(this.$route.params['id']);
		},
		manufacturers() {
			return this.$store.getters.allManufacturers;
		},
		model() {
			let _product = {};
			Object.keys(this.product).forEach((key) => {
				if(key == 'manufacturer'){
					_product[key] = this.product[key]._id;
				}else{
					_product[key] = this.product[key];
				}
			  
			});
			return Object.assign({}, _product);
		}
	},
	created() {
		if (!this.product.name) {
			this.$store.dispatch('productById', this.$route.params['id'])
		}

	    if (this.manufacturers.length === 0) {
	        this.$store.dispatch('allManufacturers')
	    }
	},
	methods:{
		updateProduct(model){
        	this.$store.dispatch('updateProduct',model);
		}
	}
}

</script>
