import { createRouter, createMemoryHistory, createWebHashHistory } from 'vue-router';

import Home from '@/page/PageHome/AppHome.vue';





const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ];
  
  const router = createRouter({
    // history: createMemoryHistory(),
    history: createWebHashHistory(),
    routes
  });
  
  export default router;
