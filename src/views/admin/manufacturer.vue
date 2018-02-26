<style lang="scss">
@import '~@/styles/mixins', '~@/styles/variables';
$cover: 120px;
$option: 120px;
.admin-manufacturer {
	width: 100%;
	height: 100%;
	.am-domain{
		width: 100%;
		@include flexLayout(flex,justify,center);
		padding: 10px 0;
		.am-dadd{
			.ask-button{
				min-width: auto;
				padding: 12px 16px;
			}
		}
		.am-dsearch{}
	}
	.am-header {
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
	.am-body{
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
						text-align: center;
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
.ask-modal{
	.manufacturer-input{
		width: 100%;
		border:none;
		outline: none;
		font-size: 1.6rem;
		padding: 10px 12px;
		color: map-get($color,400D3);
		box-shadow: 0 0 12px map-get($color,800);
		border-radius: 2px;
	}
}
</style>
<template>
	<div class="admin-manufacturer">
		<div class="am-domain">
			<div class="am-dadd">
				<ask-button @ask-click="add">
					<i class="iconfont icon-add"></i>
					<span class="button-text">添加一个制造商</span>
				</ask-button>
			</div>
			<div class="am-dsearch">
				<search :placeholder="'搜索制造商'" @search-click="searchClick"></search>
			</div>
		</div>
		<div class="am-header">
			<ul>
				<li class="cover">
					<span>索引</span>
				</li>
				<li>
					<span>名称</span>
				</li>
				<li class="option">
					<span>操作</span>
				</li>
			</ul>
		</div>
		<div class="am-body">
			<ul>
				<template v-for="(manufacturer,$i) in manufacturers">
					<li>
						<div class="item cover">
							{{$i+1}}
						</div>
						<div class="item">
							{{manufacturer.name}}
						</div>
						<div class="item option">
							<ask-button @ask-click="edit(manufacturer)">
								<span class="button-text">
									<i class="iconfont icon-edit"></i>
								</span>
							</ask-button>
							<ask-button @ask-click="remove(manufacturer)">
								<span class="button-text">
									<i class="iconfont icon-shanchu"></i>
								</span>
							</ask-button>
						</div>
					</li>
				</template>
				<template v-if="manufacturers.length == 0">
					<li>
						<div class="null-text">暂无</div>
					</li>
				</template>
			</ul>
		</div>
	</div>
</template>
<script>
import {
  ERROR_MSG
} from '@/store/mutations-types';
import { askDialogConfirm,askDialogToast,askDialogAlert } from '@/utils';
import search from './search';
export default {
	name: "admin-manufacturer",
	components:{
		search
	},
	computed: {
		cart(){
			return this.$store.getters.allCart;
		},
		manufacturers() {
			return this.$store.getters.allManufacturers;
		}
	},
	created() {
		if(this.manufacturers.length == 0){
			this.$store.dispatch('allManufacturers');
		}
	},
	methods:{
		remove(manufacturer){
			let _index = this.cart.findIndex(c=> c.product &&　c.product.manufacturer == manufacturer._id);
			if(_index !== -1){
				askDialogAlert({
					'title':'警示框',
					'msg':`购物车中含有制造商"${manufacturer.name}"的产品，无法删除！`,
					'class':'danger'
				},(vm)=>{
					vm.close();
				})
			}else{
				askDialogAlert({
					'title':'提示框',
					'msg':`是否删除制造商"${manufacturer.name}"？`,
					'class':'success'
				},(vm)=>{
					vm.close();
					this.$store.dispatch('removeManufacturer',manufacturer);
				})
			}	
			
		},
		edit(manufacturer){
			askDialogConfirm({
				title: '修改制造商',
				msg: `<input type="text" id="manufacturer_edit" class="manufacturer-input" value="${manufacturer.name}" placeholder="请输入制造商名称">`
			}, (vm) => {
				let _name = document.getElementById('manufacturer_edit');
				if(!_name.value){
					this.$store.commit(ERROR_MSG, {
						type: 'error',
						title: 'Validation!',
						msg: '请填写制造商名称'
					})
					return;
				}
				let _m = {...manufacturer,name:_name.value};
				
				this.$store.dispatch('updateManufacturer',_m);
				vm.close();
			});
		},
		add(){
			askDialogConfirm({
				title: '添加制造商',
				msg: `<input type="text" id="manufacturer_add" class="manufacturer-input" placeholder="请输入制造商名称">`
			}, (vm) => {
				let _name = document.getElementById('manufacturer_add');
				if(!_name.value){
					this.$store.commit(ERROR_MSG, {
						type: 'error',
						title: 'Validation!',
						msg: '请填写制造商名称'
					})
					return;
				}
				this.$store.dispatch('addManufacturer',{
					name: _name.value,
				});
				vm.close();
			});
		},
		searchClick(val){
			console.log(val);
		}
	}
}

</script>
