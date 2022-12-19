import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import './style.css';
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
import 'chartjs-plugin-style';
// import print from 'vue3-print-nb';

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(router).use(vuetify).use(VCalendar).mount('#app');
