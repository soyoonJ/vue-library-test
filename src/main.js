import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
import 'chartjs-plugin-style';
// import print from 'vue3-print-nb';

createApp(App).use(router).use(VCalendar).mount('#app');
