import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import { piniaPlugin } from './store/index'
import './style.css'
import './assets/css/reset.less'

let app = createApp(App);

store.use(piniaPlugin({
    key: 'pinia'
})); // 装载pinia缓存插件

app.use(store);
app.mount('#app')
