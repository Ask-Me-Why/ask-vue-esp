<style lang="scss">
	@import '~@/styles/mixins','~@/styles/variables';
	.search-box{
		@include flexLayout(flex,normal,center);
		.search-input{
			width: 140px;
			margin: 0;
			padding: 10px 10px;
			font-size: 1.6rem;
			background-color: transparent;
			border-radius: 4px;
			outline: none;
			border: 1px solid map-get($color,600);
			transition : width .3s cubic-bezier(0.35, 0, 0.25, 1);
			&:focus{
				width: 320px;
				transition : width .3s cubic-bezier(0.35, 0, 0.25, 1);
			}
		}
		.ask-button{
			min-width: auto;
			padding: 8px 16px;
			background-color: map-get($admin,500S1);
			margin-left: 4px;
			border-radius: 4px;
			.iconfont{
				font-size: 1.6rem;
				color: map-get($color,200);
			}
		}
	}
</style>
<template>
	<div class="search-box">
		<input class="search-input" type="text" v-model="searchVal" v-validate="'required'" name="search" :placeholder="placeholder">
		<ask-button :disabled="errors.has('search')" @ask-click="onClick">
			<i class="iconfont icon-search"></i>
		</ask-button>
	</div>
</template>
<script>
	export default{
		name:"search",
		props:["value","placeholder"],
		data(){
			return {
				searchVal: this.value
			}
		},
		methods:{
			onClick(){
				this.$emit('search-click',this.searchVal);
			}
		}
	}
</script>