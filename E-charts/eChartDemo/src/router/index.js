import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

import part1 from '@/pages/part1';
import part2 from '@/pages/part2'
import part3 from '@/pages/part3'
import part4 from '@/pages/part4'
import part5 from '@/pages/part5'
import part6 from '@/pages/part6'
import part7 from '@/pages/part7'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        part1,
        part2,
        part3,
        part4,
        part5,
        part6,
        part7,
      },
    },
    {
      path: '/part1',
      name: 'part1',
      component: part1,
    },
    {
      path: '/part2',
      name: 'part2',
      component: part2,
    },
    {
      path: '/part3',
      name: 'part3',
      component: part3,
    },
    {
      path: '/part4',
      name: 'part4',
      component: part4,
    },
    {
      path: '/part5',
      name: 'part5',
      component: part5,
    },
    {
      path: '/part6',
      name: 'part6',
      component: part6,
    },
    {
      path: '/part7',
      name: 'part7',
      component: part7,
    },
  ],
});
