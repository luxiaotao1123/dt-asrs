import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: () => import('../components/login.vue')
    }  
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;