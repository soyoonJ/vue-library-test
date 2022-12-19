import { createRouter, createWebHashHistory } from 'vue-router';

import Chart from '../views/Chart.vue';
import Calendar from '../views/Calendar.vue';
import Editor from '../views/Editor.vue';
import SheetJS from '../views/SheetJS.vue';
import CssFramework from '../views/CssFramework.vue';

const routes = [
  {
    path: '/chart',
    name: 'Chart',
    component: Chart,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor,
  },
  {
    path: '/sheetjs',
    name: 'SheetJS',
    component: SheetJS,
  },
  {
    path: '/cssframework',
    name: 'CssFramework',
    component: CssFramework,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
