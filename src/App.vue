<template>
	<div id="app" class="container tab">
		<nav-tab></nav-tab>
		<!-- <transition :name="transitionName"> -->
		<router-view></router-view>
		<!-- </transition> -->
		<div class="overlay" v-show="showLoader">
			<div class="loading-spinner">
				<div class="dot dotOne"></div>
				<div class="dot dotTwo"></div>
				<div class="dot dotThree"></div>
			</div>
		</div>
	</div>
	</div>
</template>
<style src="./styles/base.scss" lang="scss"></style>
<style src="./styles/compatible.scss" lang="scss"></style>
<script>
import askOverlay from '@/components/ask/ask-overlay/ask.overlay.js';
import navTab from '@/components/core/nav-tab/nav-tab.vue';
import {
	ADD_PRODUCT_SUCCESS,
	UPDATE_PRODUCT_SUCCESS,
	REMOVE_PRODUCT_SUCCESS,
	ADD_MANUFACTURERS_SUCCESS,
	UPDATE_MANUFACTURERS_SUCCESS,
	REMOVE_MANUFACTURERS_SUCCESS,
	ERROR_MSG
} from '@/store/mutations-types';
import { askDialogToast } from '@/utils';
export default {
	name: 'app',
	computed: {
		showLoader() {
			return this.$store.state.showLoader;
		}
	},
	data() {
		return {
			transitionName: 'slide'
		}
	},
	watch: {
		'$route' (to, from) {
			askOverlay.closeAll();
		}
	},
	components: {
		'nav-tab': navTab
	},
	created() {
		this.$store.subscribe((mutation) => {
			if (mutation.payload) {
				switch (mutation.type) {
					case ERROR_MSG:
						askDialogToast({ msg: mutation.payload.msg ? mutation.payload.msg : `接口请求失败`, time: 2000, class: 'danger' });
						break;
					case ADD_PRODUCT_SUCCESS:
						askDialogToast({ msg: `"${mutation.payload.name}"添加成功`, time: 2000, class: 'success' });
						break;
					case UPDATE_PRODUCT_SUCCESS:
						askDialogToast({ msg: `"${mutation.payload.name}"更新成功`, time: 2000, class: 'success' });
						break;
					case REMOVE_PRODUCT_SUCCESS:
						askDialogToast({ msg: `"${mutation.payload.name}"删除成功`, time: 2000, class: 'success' });
						break;
					case ADD_MANUFACTURERS_SUCCESS:
						askDialogToast({ msg: `"${mutation.payload.name}"添加成功`, time: 2000, class: 'success' });
						break;
					case UPDATE_MANUFACTURERS_SUCCESS:
						askDialogToast({ msg: `"${mutation.payload.name}"更新成功`, time: 2000, class: 'success' });
						break;
					case REMOVE_MANUFACTURERS_SUCCESS:
						askDialogToast({ msg: `"${mutation.payload.name}"删除成功`, time: 2000, class: 'success' });
						break;
				}
			}
		})
	}
}

</script>
<style lang="scss">
.overlay {
	background: rgba(255, 255, 255, 0.6);
	position: fixed;
	z-index: 1002;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.loading-spinner {
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translateX(-50%) translateY(-50%);
	-moz-transform: translateX(-50%) translateY(-50%);
	transform: translateX(-50%) translateY(-50%);
}

.dot {
	background: black;
	border-radius: 100%;
	color: white;
	height: 8px;
	line-height: 8px;
	text-align: center;
	width: 8px;
}

.dotOne {
	-webkit-animation: dotOneKeyframes 5s ease infinite;
	background: #F9E610;
	position: absolute;
	top: 0;
	left: 0;
}

.dotTwo {
	-webkit-animation: dotTwoKeyframes 5s ease 0.4166666666666s infinite;
	background: #EFDB06;
	position: absolute;
	top: 0;
	left: 14px;
}

.dotThree {
	-webkit-animation: dotThreeKeyframes 5s ease 0.83333333333s infinite;
	background: #DBC906;
	position: absolute;
	top: 14px;
	left: 14px;
}

@-webkit-keyframes dotOneKeyframes {
	0% {
		top: 0;
		left: 0;
	}
	8.3333333333% {
		top: 14px;
		left: 0;
	}
	16.6666666666% {}
	25% {
		top: 14px;
		left: 0;
	}
	33.3333333333% {
		top: 14px;
		left: 14px;
	}
	41.6666666666% {}
	50% {
		top: 14px;
		left: 14px;
	}
	58.3333333333% {
		top: 0;
		left: 14px;
	}
	66.6666666666% {}
	75% {
		top: 0;
		left: 14px;
	}
	83.3333333333% {
		top: 0;
		left: 0;
	}
	91.6666666666% {}
	100% {}
}

@-webkit-keyframes dotTwoKeyframes {
	0% {
		top: 0;
		left: 14px;
	}
	8.3333333333% {
		top: 0;
		left: 0;
	}
	16.6666666666% {}
	25% {
		top: 0;
		left: 0;
	}
	33.3333333333% {
		top: 14px;
		left: 0;
	}
	41.6666666666% {}
	50% {
		top: 14px;
		left: 0;
	}
	58.3333333333% {
		top: 14px;
		left: 14px;
	}
	66.6666666666% {}
	75% {
		top: 14px;
		left: 14px;
	}
	83.3333333333% {
		top: 0;
		left: 14px;
	}
	91.6666666666% {}
	100% {}
}

@-webkit-keyframes dotThreeKeyframes {
	0% {
		top: 14px;
		left: 14px;
	}
	8.3333333333% {
		top: 0;
		left: 14px;
	}
	16.6666666666% {}
	25% {
		top: 0;
		left: 14px;
	}
	33.3333333333% {
		top: 0;
		left: 0;
	}
	41.6666666666% {}
	50% {
		top: 0;
		left: 0;
	}
	58.3333333333% {
		top: 14px;
		left: 0;
	}
	66.6666666666% {}
	75% {
		top: 14px;
		left: 0;
	}
	83.3333333333% {
		top: 14px;
		left: 14px;
	}
	91.6666666666% {}
	100% {}
}

</style>
