<style lang="scss">
@import '~@/styles/mixins', '~@/styles/variables';
.product-cart {
	margin: 20px 0;
	.box {
		width: 100%;
		border: 1px solid map-get($color, 600);
		padding: 10px 14px;
		border-radius: 4px;
		&:hover{
			transform: scale3d(.99,.99,1) translateZ(0);
			transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;
		}
		&::after {
			content: '\0012';
			display: block;
			width: 0;
			height: 0;
			visibility: hidden;
			font-size: 0;
			line-height: 0;
			clear: both;
		}
		.cover {
			text-align: center;
			float: left;
			width: 350px;
			height: 280px;
			background-color: map-get($color, 200);
			box-shadow: 0 0 14px map-get($color, 700);
			.adaption {
				width: 100%;
				height: 100%;
				&>img {
					height: 100%;
				}
			}
		}
		.detail {
			height: 280px;
			float: left;
			width: calc(100% - 350px);
			padding: 10px 0 48px 10px;
			position: relative;
			small {
				width: 100%;
				@include textEllipsis(1);
				font-size: 1.4rem;
				color: map-get($color, 400M);
			}
			h4 {
				@include textEllipsis(1);
				margin: 0;
				width: 100%;
				font-size: 1.6rem;
				color: map-get($color, 400D1);
				padding: 10px 0;
				font-weight: normal;
			}
			p {
				margin: 0;
				@include textEllipsis(3);
				font-size: 1.4rem;
				line-height: 1.8rem;
				color: map-get($color, 400D3);
			}
			.info {
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				z-index: 1;
				padding: 0 0 0 10px;
				width: 100%;
				@include flexLayout(flex, justify, bottom);
				.price {
					flex: 1 0 auto;
					color: map-get($color, 800);
					font-weight: 600;
					font-size: 2.8rem;
				}
				.product-button {
					width: 190px;
				}
			}
		}
	}
}

@media only screen and (max-width: 768px) {
	.product-cart .box .cover, .product-cart .box .detail {
		width: 100%;
	}
	.product-cart .box .detail {
		height: auto;
	}
}

</style>
<template>
	<div class="product-cart">
		<div class="box">
			<router-link :to="{ path: `/detail/${product._id}`}">
				<div class="cover" v-if="product.name">
					<div class="adaption">
						<img :src="product.image" alt="产品图片">
					</div>
				</div>
				<div class="detail">
					<small>{{product.manufacturer && product.manufacturer.name}}</small>
					<h4>{{product.name}}</h4>
					<p>{{product.description}}</p>
					<div class="info" v-if="product.name">
						<div class="price num">
							<i class="iconfont icon-53"></i>{{product.price}}</div>
						<product-button :product="product"></product-button>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
import productButton from './product-button.vue';
export default {
	name: "product-detail",
	components: {
		'product-button': productButton
	},
	props: ['product']
}

</script>
