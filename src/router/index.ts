import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/login.vue')
    },
    {
        path: '/reg',
        name: 'reg',
        component: () => import('../components/reg.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;