import { createApp } from 'vue'

import App from './App.vue'

import { createPinia } from 'pinia' 

import './style.css'
import './assets/css/reset.less'

const store = createPinia();
let app = createApp(App);

app.use(store);

app.mount('#app')
