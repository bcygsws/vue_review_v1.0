import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import router from "@/router/index";
const app=createApp(App);
// zhu
app.use(router);
app.mount('#app');
