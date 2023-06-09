import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/layout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: Layout,
      redirect: '/bookshelf',
      children: [
        {
          path: 'bookshelf',
          name: 'bookshelf',
          component: () => import('@/views/Bookshelf/Bookshelf.vue'),
        },
        {
          path: 'bookSource',
          name: 'bookSource',
          component: () => import('@/views/BookSource/BookSource.vue'),
        },
        {
          path: 'feeds',
          name: 'feeds',
          component: () => import('@/views/Feeds/Feeds.vue'),
        },
      ],
    },
  ],
});

export default router;
