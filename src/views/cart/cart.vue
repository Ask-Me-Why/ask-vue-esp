<template>
	<div class="esp-container">
		<div class="title">
			<i class="iconfont icon-circle"></i>
			<h1>ASK Stock Cart</h1>
		</div>
		<div class="cart boundary">
			<template v-if="cart.length == 0">
				<div class="nothing">
					<div class="null-text">
						芽儿咯！帅锅，你嘚购物车是空滴(Y^Y)
					</div>
					<router-link to="/">
						<ask-button>
							<span class="button-text">
								Take a look ?
							</span>
						</ask-button>
					</router-link>
				</div>
			</template>
			<template v-else>
				<template v-for="(c,$i) in cart">
					<product-cart :product="c.product"></product-cart>
				</template>
			</template>
		</div>
	</div>
</template>
<style src="./cart.scss" lang="scss"></style>
<script>
import { Product } from '@/services';
import productCart from '@core/product/product-cart.vue';
export default {
	name: 'home',
	components: {
		'product-cart': productCart
	},
	computed: {
		cart() {
			return this.$store.getters.allCart;
		}
	}
}

</script>
