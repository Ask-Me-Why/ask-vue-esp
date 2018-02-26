<style lang="scss">
@import '~@/styles/mixins', '~@/styles/variables';
.product-form {
	width: 100%;
	&::after {
		content: '\0020';
		display: block;
		font-size: 0;
		line-height: 0;
		visibility: hidden;
		clear: both;
	}
	.group-out {
		float: left;
		width: 50%;
		padding: 0 20px;
	}
	.button-group {
		float: left;
		width: 100%;
		text-align: center;
		padding-top: 40px;
		.ask-button {
			min-width: auto;
			padding: 12px 50px;
			border-radius: 4px;
			&.update {
				color: map-get($color, 200);
				background-color: map-get($admin, 100);
			}
		}
	}
	.group {
		width: 100%;
		padding-bottom: 30px;
		position: relative;
		.danger-text {
			position: absolute;
			display: block;
			width: 100%;
			font-size: 1.4rem;
			color: map-get($admin, 600);
			@include textEllipsis(1);
			bottom: 0;
			right: 0;
			left: 0;
		}
		label {
			display: block;
			width: 100%;
			font-size: 1.6rem;
			color: map-get($admin, 100);
			@include textEllipsis(1);
			padding: 14px 0;
		}
		.g-input, .g-textarea {
			width: 100%;
			margin: 0;
			padding: 8px 10px;
			outline: none;
			border: 1px solid map-get($admin, 400);
			box-shadow: 0 0 12px map-get($admin, 400);
			border-radius: 4px;
			color: map-get($admin, 400);
			font-size: 1.4rem;
			transition: all .3s linear;
			height: 38px;
			&:focus {
				border: 1px solid map-get($admin, 200S1);
				box-shadow: 0 0 12px map-get($admin, 200S1);
			}
			&.error {
				border: 1px solid map-get($admin, 600);
				box-shadow: 0 0 12px map-get($admin, 600);
			}
		}
		.g-textarea {
			resize: none;
			height: 200px;
		}
		.privew {
			margin-top: 9px;
			padding: 10px 0;
			width: 100%;
			height: 240px;
			border: 1px solid map-get($admin, 400);
			box-shadow: 0 0 12px map-get($admin, 400);
			background-color: map-get($color, 200);
			text-align: center;
			border-radius: 4px;
			img {
				height: 100%;
			}
		}
	}
}

@media (max-width: 768px) {
	.product-form {
		.group-out {
			width: 100%;
		}
	}
}

</style>
<template>
	<div class="product-form">
		<form @submit.prevent="saveProduct">
			<div class="group-out">
				<div class="group">
					<label>名称：</label>
					<input type="text" 
						   placeholder="产品名称" 
						   v-model="model.name"
						   v-validate="'required'"
						   name="name"
						   class="g-input" 
						   :class="{error: errors.has('name')}">
					<span class="danger-text" v-show="errors.has('name')">名称是必填项</span>
				</div>
				<div class="group">
					<label>价格：</label>
					<input type="number" 
						   placeholder="产品价格" 
						   v-model="model.price"
						   v-validate="'required'"
						   name="price"
						   class="g-input" 
						   :class="{error: errors.has('price')}">
					<span class="danger-text" v-show="errors.has('price')">价格是必填项</span>
				</div>
				
				<div class="group">
					<label>描述：</label>
					<textarea placeholder="产品描述" 
							  v-model="model.description"
							  v-validate="'required'"
							  name="description"
							  class="g-textarea"
							  rows="5"
							  :class="{error: errors.has('description')}"
					></textarea>
					<span class="danger-text" v-show="errors.has('description')">描述是必填项</span>
				</div>
			</div>
			<div class="group-out">
				<div class="group">
					<label>选择制造商:</label>
					<select v-model="model.manufacturer"
						    v-validate="'required'"
						    name="manufacturer"
						    class="g-input"
						    :class="{error: errors.has('manufacturer')}">
						<template v-for="(mft,$i) in manufacturers">
							<option :key="$i" :value="mft._id" >
								{{mft.name}}
							</option>
						</template>
					</select>
					<span class="danger-text" v-show="errors.has('manufacturer')">制造商是必选项</span>
				</div>
				<div class="group">
					<label>图片：</label>
					<input type="text" 
						   placeholder="产品图片" 
						   v-model="model.image"
						   v-validate="'required|url'"
						   name="image"
						   class="g-input" 
						   :class="{error: errors.has('iamge')}">
					<span class="danger-text" v-show="errors.has('iamge')">图片是必填项</span>
				</div>
				<div class="group">
					<div class="privew">
						<img :src="model.image" alt="产品图片">
					</div>
				</div>
			</div>
			<div class="button-group">
				<template v-if="isEdit">
					<ask-button :type="'submit'" :text="'提交修改'" class="update"></ask-button>
				</template>
				<template v-else>
					<ask-button :type="'submit'" :text="'添加产品'" class="update"></ask-button>
				</template>
			</div>
		</form>
	</div>
</template>
<script>
import {
  ERROR_MSG
} from '@/store/mutations-types';
export default {
	name: "product-form",
	props: ['model', 'manufacturers' , 'isEdit'],
	methods: {
		saveProduct() {
			this.$validator.validateAll().then((result) => {
		        if (result) {
		            this.$emit('save-product', this.model);
		            return;
		        }
		        this.$store.commit(ERROR_MSG, {
		        	type: 'error',
		        	title: 'Validation!',
		        	msg: '请确保表单数据有效'
		        })
		    });
		}
	}
}

</script>
