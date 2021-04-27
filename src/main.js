import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n.js'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(i18n).use(router).mount('#app')
