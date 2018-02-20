import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';

//自訂util
import util from './util';

//ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.use(util);

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App),
});
