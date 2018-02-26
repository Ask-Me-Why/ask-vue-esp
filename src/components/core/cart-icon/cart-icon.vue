<template>
	<router-link to="/cart">

		<ask-button>
			<span class="button-text">
				<i class="iconfont icon-gouwuche"></i>Cart({{carts.length}})
			</span>
		</ask-button>
		
	</router-link>
</template>
<script>
	export default{
		computed:{
			carts(){
				return this.$store.getters.allCart;
			}
		},
		created() {
			if (this.carts.length == 0) {
				this.$store.dispatch('allCart');
			}
		}
	}
</script>