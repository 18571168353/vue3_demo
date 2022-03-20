import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from '@/icons'
import { Post,Get,Put,Delete } from '@/utils/request'
const app = createApp(App)
SvgIcon(app)
window.Post = Post
window.Get = Get
window.Put = Put
window.Delete = Delete
app.use(store).use(router).use(ElementPlus).mount('#app')