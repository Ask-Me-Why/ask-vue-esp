<style lang="scss">
	@import '~@/styles/mixins', '~@/styles/variables';
	.product-detail{
		.box{
			width: 100%;
			&::after{
				content:'\0012';
				display: block;
				width: 0;
				height: 0;
				visibility: hidden;
				font-size: 0;
				line-height: 0;
				clear:both;
			}
			.cover{
				text-align: center;
				float: left;
				width: 350px;
				background-color: map-get($color,200);
				box-shadow: 0 0 14px map-get($color,700);
				.adaption{
					width: 100%;
					min-height: 200px;
					&>img{
						max-width: 100%;
					}
				}
			}
			.detail{
				float: left;
				width: calc(100% - 350px);
				padding: 10px 0 10px 10px;
				position: relative;
				small{
					width: 100%;
					@include textEllipsis(1);
					font-size: 1.4rem;
					color: map-get($color,400M);
				}
				h4{
					@include textEllipsis(1);
					margin: 0;
					width: 100%;
					font-size: 1.6rem;
					color: map-get($color,400D1);
					padding: 10px 0;
					font-weight: normal;
				}
				p{
					margin: 0;
					font-size: 1.4rem;
					line-height: 1.8rem;
					color: map-get($color,400D3);
				}
				.info{
					padding: 20px 0 0;
					width: 100%;
					@include flexLayout(flex,justify,center);
					.price{
						flex: 1 0 auto;
						color: map-get($color,800);
						font-weight: 600;
						font-size: 2.8rem;
					}
					.product-button{
						width: 190px;
					}
				}
			}
		}
	}

	@media only screen and (max-width: 768px) {
		.product-detail .box .cover,
		.product-detail .box .detail{
			width: 100%;
			min-height: auto;
		}
	}

</style>
<template>
	<div class="product-detail boundary">
		<div class="box">
			<div class="cover" v-if="product.name">
				<div class="adaption"><img :src="product.image" alt="产品图片"></div>
			</div>
			<div class="detail">
				<small>{{product.manufacturer && product.manufacturer.name}}</small>
				<h4>{{product.name}}</h4>
				<p>{{product.description}}</p>
				<div class="info" v-if="product.name">
					<div class="price num"><i class="iconfont icon-53"></i>{{product.price}}</div>
					<product-button :product="product"></product-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>	
import productButton from './product-button.vue';
	export default{
		name:"product-detail",
		components:{
			'product-button':productButton
		},
		props: ['product']
	}
</script>