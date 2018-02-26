import Vue from 'vue'
import App from './App'
import router from './router'
import ASKComponents from './components/ask';
import './router/router.auth.js';
import store from './store';
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false;

Vue.use(ASKComponents);
Vue.use(VeeValidate)
new Vue({
	el: '#app',
	router,
	store,
	render: (h) => h(App)
})
