import './bootstrap';
import { createApp } from 'vue';
import router from './router';
import { useRouter } from 'vue-router';
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
import ContactsComponent from './components/Contacts.vue';
import MenuComponent from './components/Menu.vue';
import CallbackComponent from './components/Callback.vue';

const app = createApp({});

app.use(router);
app.component('HeaderComponent', HeaderComponent);
app.component('FooterComponent', FooterComponent);
app.component('ContactsComponent', ContactsComponent);
app.component('MenuComponent', MenuComponent);
app.component('CallbackComponent', CallbackComponent);
app.mount('#app');