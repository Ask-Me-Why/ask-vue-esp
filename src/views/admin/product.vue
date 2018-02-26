<style lang="scss">
@import '~@/styles/mixins', '~@/styles/variables';
$cover: 120px;
$price: 120px;
$option: 120px;
.admin-product {
	width: 100%;
	height: 100%;
	.ap-domain{
		width: 100%;
		@include flexLayout(flex,justify,center);
		padding: 10px 0;
		.ap-dadd{
			.ask-button{
				min-width: auto;
				padding: 12px 16px;
			}
		}
		.ap-dsearch{}
	}
	.ap-header {
		width: 100%;
		ul {
			@include flexLayout(flex, normal, center);
			li {
				flex: 1 0 auto;
				background-color: map-get($admin, 300);
				&:nth-child(2n+0) {
					background-color: map-get($admin, 300);
				}
				&:nth-child(2n+1) {
					background-color: map-get($admin, 300S1);
				}
				&.cover {
					flex: 0 0 auto;
					width: $cover;
				}
				&.price {
					flex: 0 0 auto;
					width: $price;
				}
				&.option {
					flex: 0 0 auto;
					width: $option;
				}
				span {
					display: inline-block;
					padding: 14px 0;
					width: 100%;
					text-align: center;
					font-size: 1.8rem;
					color: map-get($color, 200);
				}
			}
		}
	}
	.ap-body{
		width: 100%;
		height: calc(100% - 52px);
		overflow-y: auto;

		&::-webkit-scrollbar {
		    width: 10px;
		    background-color: transparent;
		}
		&::-webkit-scrollbar-track {
		    border-radius: 0;
		    background-color: map-get($scrollbar,600);
		    /* -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, .2);
		    box-shadow: inset 0 0 3px rgba(0, 0, 0, .2); */
		}
		&::-webkit-scrollbar-thumb {
		    border-radius: 4px;
		    background-color: rgba(map-get($scrollbar,200),.4);
		}
		&::-webkit-scrollbar-thumb:hover{
		    background-color: rgba(map-get($scrollbar,200),.6);
		}
		&::-webkit-scrollbar-thumb:active{
		    background-color: rgba(map-get($scrollbar,200),1);
		}
		ul{
			width: 100%;
			li{
				width: 100%;
				@include flexLayout(flex,normal,center);
				background-color: rgba(map-get($admin, 300),.4);
				&:nth-child(2n+0) {
					background-color: rgba(map-get($admin, 300),.4);
				}
				&:nth-child(2n+1) {
					background-color:rgba(map-get($admin, 300S1),.4);
				}
				min-height: 100px;
				.item{
					flex: 1 0 auto;
					font-size: 1.6rem;
					color: map-get($admin,400);
					padding: 0 10px;
					width: calc((100% - 360px)/2);
					&.cover {
						flex: 0 0 auto;
						width: $cover;
						.cover-box{
							max-width: 100%;
							height: ($cover - 40px);
							text-align: center;
							img{
								height: 100%;
							}
						}
					}
					&.price {
						flex: 0 0 auto;
						width: $price;
					}
					&.option {
						flex: 0 0 auto;
						width: $option;
						.ask-button{
							width: 100%;
							min-width: auto;
							color: map-get($admin,200);
							font-weight: 900;
							font-size: 2.4rem;
							padding: 8px 16px;
							i.iconfont{
								font-size: 2.4rem;
							}
						}
					}
				}
			}
		}
	}
}

</style>
<template>
	<div class="admin-product">
		<div class="ap-domain">
			<div class="ap-dadd">
				<ask-button @ask-click="add">
					<i class="iconfont icon-add"></i>
					<span class="button-text">添加一个产品</span>
				</ask-button>
			</div>
			<div class="ap-dsearch">
				<search :placeholder="'请输入商品名称'" @search-click="searchClick"></search>
			</div>
		</div>
		<div class="ap-header">
			<ul>
				<li class="cover">
					<span>图片</span>
				</li>
				<li>
					<span>名称</span>
				</li>
				<li class="price">
					<span>价格</span>
				</li>
				<li>
					<span>制造商</span>
				</li>
				<li class="option">
					<span>操作</span>
				</li>
			</ul>
		</div>
		<div class="ap-body">
			<ul>
				<template v-for="(product,$i) in products">
					<li>
						<div class="item cover">
							<div class="cover-box">
								<img :src="product.image" alt="产品图片">
							</div>
						</div>
						<div class="item">
							{{product.name}}
						</div>
						<div class="item price">
							<i class="iconfont icon-53"></i>{{product.price}}
						</div>
						<div class="item">
							{{product.manufacturer.name}}
						</div>
						<div class="item option">
							<ask-button @ask-click="edit(product)">
								<span class="button-text">
									<i class="iconfont icon-edit"></i>
								</span>
							</ask-button>
							<ask-button @ask-click="remove(product)">
								<span class="button-text">
									<i class="iconfont icon-shanchu"></i>
								</span>
							</ask-button>
						</div>
					</li>
				</template>
				<template v-if="products.length == 0">
					<li>
						<div class="null-text">嘛玩意儿都没一U</div>
					</li>
				</template>
			</ul>
		</div>
	</div>
</template>
<script>
import { askDialogToast,askDialogAlert } from '@/utils';
import search from './search';
export default {
	name: "admin-product",
	components:{
		search
	},
	computed: {
		cart(){
			return this.$store.getters.allCart;
		},
		products() {
			return this.$store.getters.allProducts;
		}
	},
	created() {
		if (this.products.length === 0) {
			this.$store.dispatch('allProducts');
		}
	},
	methods:{
		remove(product){
			let _index = this.cart.findIndex(c=> c.product &&　c.product._id == product._id);
			if(_index !== -1){
				askDialogAlert({
					'title':'警示框',
					'msg':`"${product.name}"存在购车中，确定删除吗？`,
					'class':'danger'
				},(vm)=>{
					vm.close();
					this.$store.dispatch('removeCart',this.cart[_index]);
					this.$store.dispatch('removeProduct',product);
				})
			}else{
				askDialogAlert({
					'title':'提示框',
					'msg':`是否删除产品"${product.name}"？`,
					'class':'success'
				},(vm)=>{
					vm.close();
					this.$store.dispatch('removeProduct',product);
				})
			}	
		},
		edit(product){
			this.$router.push({ path: `/admin/edit/${product._id}`});
		},
		add(){
			this.$router.push({ path: `/admin/new`});
		},
		searchClick(val){
			console.log(val)
		}
	}
}

</script>


