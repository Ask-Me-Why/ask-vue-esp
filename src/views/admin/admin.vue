<style lang="scss">
@import '~@/styles/mixins', '~@/styles/variables';
body{
	width: 100%;
	width: 100vw;
	height: 100%;
	height: 100vh;
	.container.tab{
		width: 100%;
		height: 100%;
	}
}
.esp-container.admin {
	width: 100%;
	height: 100%;
	@include flexLayout(flex, normal, normal);
	.admin-nav {
		width: 200px;
		height: 100%;
		overflow-y:auto;
		&::-webkit-scrollbar{
			display:none;
		}
		.ask-tab-nav{
			background: linear-gradient( 90deg,rgba(map-get($admin,500S1),.3) 10%, rgba(map-get($admin,100),.9) 30%,rgba(map-get($admin,500S1),.8) );
			.ask-button{
				color: map-get($color,200);
				font-size: 2rem;
				transition: color .3s cubic-bezier(0.35, 0, 0.25, 1);
			}
			&.active{
				.ask-button{
					transition: color .3s cubic-bezier(0.35, 0, 0.25, 1);
					color: map-get($color,300);
				}
			}
		}
	}
	.admin-body {
		width: calc(100% - 200px);
		padding: 0 10px;
		height: 100%;
	}
}

@media (min-width: 992px) {
	.esp-container.admin {
		.admin-nav {
			width: 240px;
		}
		.admin-body {
			width: calc(100% - 240px);
		}
	}
}

@media (max-width: 768px) {
	body{
		width: 100%;
		height: auto;
	}
	.esp-container.admin {
		display: block;
		.admin-nav {
			width: 100%;
			ul{
				li{
					.ask-button{
						.button-text{
							@include flexLayout(flex,center,center);
							span{
								flex: 0 0 auto;
							}
						}
					}
				}
			}
		}
		.admin-body {
			width: 100%;
			padding: 10px 0 ;
		}
	}
}

</style>
<template>
	<div class="esp-container admin boundary">
		<div class="admin-nav">
			<ask-tab :vertical="true" :lineWidth="4">
				<ask-tab-nav :selected="$route.meta.admin == 'product'" @on-click="onClick('/admin')">
					<span class="button-text">
						<i class="iconfont icon-manage"></i>
						<span>产品列表</span>
					</span>
				</ask-tab-nav>
				<ask-tab-nav :selected="$route.meta.admin == 'manufacturer'" @on-click="onClick('/admin/mft')">
					<span class="button-text">
						<i class="iconfont icon-manage"></i>
						<span>制造商列表</span>
					</span>
				</ask-tab-nav>
			</ask-tab>
		</div>
		<div class="admin-body">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default{
		name:'admin',
		methods:{
			onClick(url){
				this.$router.push(url)
			}
		}
	}
</script>