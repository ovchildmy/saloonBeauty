import './bootstrap';
import { createApp } from 'vue';
import router from './router';
import { useRouter } from 'vue-router';
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
import ContactsComponent from './components/Contacts.vue';

const app = createApp({});

app.use(router);
app.component('HeaderComponent', HeaderComponent);
app.component('FooterComponent', FooterComponent);
app.component('ContactsComponent', ContactsComponent);
app.mount('#app');