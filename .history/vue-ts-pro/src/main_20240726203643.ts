import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import router from "@/router/index";
const app=createApp(App);
// 注册l
app.use(router);
app.mount('#app');
