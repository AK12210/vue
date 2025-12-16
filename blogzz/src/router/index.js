import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../store/auth'


const routes = [
{ path: '/', component: () => import('../pages/Home.vue') },
{ path: '/posts', component: () => import('../pages/Posts.vue') },
{
path: '/posts/:id',
component: () => import('../pages/PostDetail.vue'),
props: true
},
{
  path: '/admin',
  component: () => import('../pages/Admin.vue'),
  children: [
    {
      path: 'stats',
      component: () => import('../pages/AdminStats.vue')
    },
  ],
  meta: { requiresAdmin: true }
}
,
{ path: '/:pathMatch(.*)*', component: () => import('../pages/NotFound.vue') }
]


const router = createRouter({ history: createWebHistory(), routes })


router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.requiresAdmin && !auth.isAdmin) {
    next('/')
  } else {
    next()
  }
})


export default router