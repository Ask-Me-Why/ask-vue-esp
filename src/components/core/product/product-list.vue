<style lang="scss">
@import '~@/styles/mixins', '~@/styles/variables';
.product-list {
	@include flexLayout(flex, normal, center);
	flex-flow: row wrap;
}

</style>
<template>
	<div class="product-list boundary">
		<template v-for="product in products">
			<product-item :product="product"></product-item>
		</template>
	</div>
</template>
<script>
import productItem from './product-item.vue';
export default {
	name: "product-list",
	components: {
		'product-item': productItem
	},
	computed: {
		products() {
			return this.$store.getters.allProducts;
		}
	},
	created() {
			let s = {s: 2,s:3};
			console.log({...s});
		if (this.products.length == 0) {
			this.$store.dispatch('allProducts');
		}
		// this.$store.dispatch('addManufacturer',{
		// 	name: '制造商2',
		// });
		let opt = [{
				"name": "测试",
				"price": 20,
				"description": "我是有图片的测试数据，请不要低调的对待我的哎",
				"image": "https://i.imgur.com/PFLgTPi.jpg",
				"manufacturer": "59e45078ac2d111fbc22d9cd"
			},

			{
				"name": "触发制造商",
				"price": 10,
				"description": "触发制造商流程",
				"image": "https://www.allaboutbirds.org/guide/PHOTO/LARGE/annas_hummingbird_sim_1.jpg",
				"manufacturer": "59e45078ac2d111fbc22d9cd"
			},

			{
				"name": "没图片",
				"price": 20,
				"description": "没图片的说",
				"image": "",
				"manufacturer": "59e45078ac2d111fbc22d9cd"
			}

		]
		// this.$store.dispatch('addProduct',opt[0]);
		// this.$store.dispatch('addProduct',opt[1]);
		// this.$store.dispatch('addProduct',opt[0]);
		// this.$store.dispatch('addProduct',opt[1]);
		// this.$store.dispatch('addProduct',opt[2]);
	}
}

</script>
