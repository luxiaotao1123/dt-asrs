import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import { piniaPlugin } from './store/index'
import router from './router/index'
import './style.css'
import './assets/css/reset.less'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

let app = createApp(App);

// 装载pinia缓存插件
store.use(piniaPlugin({
    key: 'pinia'
})); 

app.use(store);
app.use(router);
app.use(Antd);
app.mount('#app')
