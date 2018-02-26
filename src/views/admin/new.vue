<template>
	<div class="admin-eidt">
		<product-form :model="model" :manufacturers="manufacturers" @save-product="addProduct"></product-form>
	</div>
</template>

<script>
import productForm from '@core/product/product-form.vue';
export default {
	name: 'new',
	components: {
		'product-form': productForm
	},
	data(){
		return {
			model:{}
		}
	},
	computed: {
		manufacturers() {
			return this.$store.getters.allManufacturers;
		}
	},
	created() {
	    if (this.manufacturers.length === 0) {
	        this.$store.dispatch('allManufacturers')
	    }
	},
	methods:{
		addProduct(model){
        	this.$store.dispatch('addProduct',model);
		}
	}
}

</script>