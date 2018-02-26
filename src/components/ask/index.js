//按钮控件
import askButton from './ask-button/ask-button.vue';
import askRipple from './ask-ripple/ask-ripple.vue';

//模态框控件
import askModal from './ask-modal/ask-modal.vue';
import askOverlay from './ask-overlay/ask-overlay.vue';
import askLoader from './ask-loader/ask-loader.vue';


//swiper模块
import askSwiper from './ask-swiper/ask-swiper.vue';
import askSlide from './ask-swiper/ask-slide.vue';

//日历控件
import askPicker from './ask-calendar/ask-picker.vue';
import askPickerRange from './ask-calendar/ask-picker-range.vue';

//tab组件
import askTabComponents from './ask-tab';

//上拉加载和下拉刷新组件

import askRefresh from './ask-refresh/ask-refresh.vue';

//图片预览插件
import askPreviewer from './ask-previewer/ask-previewer.vue'

const components = {
	'ask-button': askButton,
	'ask-modal': askModal,
	'ask-ripple': askRipple,
	'ask-swiper':askSwiper,
	'ask-slide':askSlide,
	'ask-overlay':askOverlay,
	'ask-loader':askLoader,
	'ask-picker':askPicker,
	'ask-picker-range':askPickerRange,
	'ask-refresh':askRefresh,
	'ask-previewer':askPreviewer,
}
Object.assign(components,askTabComponents);

export default {
	install(Vue) {
		Object.keys(components).forEach((key) => Vue.component(key, components[key]));
	}
}
