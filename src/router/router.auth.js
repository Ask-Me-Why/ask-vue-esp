import router from './index.js'
import { refreshTitle } from '@/utils';

router.beforeEach((to, from, next) => {
	if(to.meta.title){
		refreshTitle(to.meta.title);
	}else{
		refreshTitle('Ask-Me-Why');
	}
	/*if(to.matched.some(record=> record.meta.title)){
	}*/
	next()
})
