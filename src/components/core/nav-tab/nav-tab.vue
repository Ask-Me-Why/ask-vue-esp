<template>
	<nav :class="{'scroll-fixed': scrollShow}">
		<ul class="esp-nav boundary">
			<li class="en-li" :class="{active: $route.meta.active == 'index'}">
				<router-link to="/">
					<ask-button>
						<span class="button-text">
							<i class="iconfont icon-keaishouye"></i>Home
						</span>
					</ask-button>
				</router-link>
			</li>
			<li class="en-li" :class="{active: $route.meta.active == 'admin'}">
				<router-link to="/admin">
					<ask-button>
						<span class="button-text">
							<i class="iconfont icon-guanli"></i>Admin
						</span>
					</ask-button>
				</router-link>
			</li>
			<li class="en-li right" :class="{active:$route.meta.active == 'cart'}">
				<cart-icon></cart-icon>
			</li>
		</ul>
	</nav>
</template>

<style src="./nav-tab.scss" lang="scss"></style>
<script>

import cartIcon from '@/components/core/cart-icon/cart-icon.vue';
	export default{
		computed:{
			scrollShow(){
				return true;
			}
		},
		components:{
			'cart-icon':cartIcon
		}
	}
</script>
