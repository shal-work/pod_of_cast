import { createRouter, createMemoryHistory, createWebHashHistory, useRouter  } from 'vue-router';

import Home from '@/page/PageHome/AppPageHome.vue';
import About from '@/page/PageAbout/AppPageAbout.vue';
import Detail from '@/page/PageDetail/AppPageDetail.vue';
import Blog from '@/page/PageBlog/AppPageBlog.vue';
import SingleBlog   from '@/page/PageSingleBlog/AppPageSingleBlog.vue';



const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/detail/:id?',
      alias: '/detail',
      name: 'Detail',
      component: Detail,
      props: true,
    },
    {
      path: '/article',
      name: 'Blog',
      component: Blog,
      props: true,
    },
    {
      path: '/single-blog/:id?',
      alias: '/single-blog',
      name: 'SingleBlog',
      component: SingleBlog,
      props: true,
    },

  ];
  

  const router = createRouter({
    // history: createMemoryHistory(),
    history: createWebHashHistory(),
    routes
  });



  
  export default router;
