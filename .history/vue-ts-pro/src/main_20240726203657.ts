import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import router from "@/router/index";
const app=createApp(App);
// 注册路由
app.use(router);
// 渲染index#app组件
app.mount('#app');
