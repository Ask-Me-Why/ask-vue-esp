<style lang="scss">
	@import '~@/styles/mixins', '~@/styles/variables';
	.product-button{
		width: 100%;
		.ask-button{
			width: 100%;
			background-color: map-get($color,300M);
			min-width: auto;
			&.danger{
				background-color: map-get($color,100);
			}
			.button-text{
				@include flexLayout(flex,center,center);
				i{
					font-size: 1.6rem;
					color: map-get($color,200);
					transform: translateY(-15%);
					margin-right: 8px;
				}
				span{
					font-size: 1.8rem;
					color: map-get($color,200);
				}
			}
		}
	}
</style>
<template>
	<div class="product-button">
		<ask-button v-if="isAdd" @ask-click="addCart($event)">
			<span class="button-text">
				<i class="iconfont icon-gouwuche"></i>
				<span>add cart</span>
			</span>
		</ask-button>
		<ask-button v-else="isAdd" class="danger" @ask-click="removeCart($event)">
			<span class="button-text">
				<i class="iconfont icon-shanchu"></i>
				<span>remove cart</span>
			</span>
		</ask-button>
	</div>
</template>

<script>
	export default{
		name:"product-button",
		props: ['product'],
		computed:{
			cart(){
				return this.$store.getters.allCart;
			},
			isAdd(){
				return this.cart.findIndex(c=> c.product &&　c.product._id == this.product._id) == -1;
			}
		},
		methods:{
			addCart(e){
				e.stopPropagation();
				e.preventDefault();
				this.$store.dispatch('addCart',this.product);
			},
			removeCart(e){
				e.stopPropagation();
				e.preventDefault();
				let _index = this.cart.findIndex(c=> c.product._id == this.product._id);
				this.$store.dispatch('removeCart',this.cart[_index]);
			}
		}
	}
</script>