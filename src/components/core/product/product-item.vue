<style lang="scss">
	@import '~@/styles/mixins', '~@/styles/variables';
	.product-item{
		padding: 10px 10px;
		@include mediaQuery();
		position: relative;
		a{
			text-decoration: none;	
		}
		.in{
			position: relative;
			width: 100%;
			overflow: hidden;
			box-shadow: 0 0 10px rgba(map-get($color,800),.8);
			transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) all;
		}
		.action{
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			width: 100%;
			transform: translateY(100%);
			transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;
		}
		.box{
			width: 100%;
			background-color: map-get($color,200);
			border-radius: 4px;
			overflow: hidden;
			
			.cover{
				width: 100%;
				padding: 10px 0;
				transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;
				.adaption{
					width: 100%;
					height: 240px;
					text-align: center;
					position: relative;
					&>img{
						max-width: none;
						height: 100%;
					}
				}
			}
			.description{
				@include flexLayout(flex,normal,center);
				padding: 10px 16px;
				background-color: map-get($color,200);
				transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;
				.info{
					flex: 2;
					width: 60%;
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
						color: map-get($color,400D3);
						padding: 10px 0;
						font-weight: normal;
					}
				}
				.price{
					flex: 1;
					color: map-get($color,800);
					font-weight: 600;
					font-size: 2.4rem;
					text-align: right;
					width: 40%;
				}
			}
		}
		.in:hover,
		.in:active{
			box-shadow: 0 0 20px rgba(map-get($color,800),1);
			transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) all;
			.description{
				transform: translateY(-48px);
			}
			.action{
				transform: none;
			}
			.cover{
				transform: scale(1.1);
			}
		}
	}
</style>
<template>
	<div class="product-item">
		<div class="in">
			<router-link :to="{ path: `/detail/${product._id}`}">
				<div class="box">
					<div class="cover">
						<div class="adaption"><img :src="product.image" alt="产品图片"></div>
					</div>
					<div class="description">
						<div class="info">
							<small>{{product.manufacturer.name}}</small>
							<h4>{{product.name}}</h4>
						</div>
						<div class="price num">
							<i class="iconfont icon-53"></i>{{product.price}}
						</div>
					</div>
				</div>
			</router-link>
			<div class="action">
				<product-button :product="product"></product-button>
			</div>
		</div>
	</div>
</template>

<script>
import productButton from './product-button.vue';
	export default{
		name:"product-item",
		components:{
			'product-button':productButton
		},
		props: ['product']
	}
</script>