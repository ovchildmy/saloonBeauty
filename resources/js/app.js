import './bootstrap';
import { createApp } from 'vue';
import router from './router';
import { useRouter } from 'vue-router';
import HeaderComponent from './components/Header.vue';

const app = createApp({});

app.use(router);
app.component('HeaderComponent', HeaderComponent);
app.mount('#app');