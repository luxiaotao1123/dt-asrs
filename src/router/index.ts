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

// 全局前置路由守卫
const whiteList = ['/', '/login']
router.beforeEach((to, from, next) => {
    if(whiteList.includes(to.path) || localStorage.getItem('token')) {
        next();
    } else {
        next('/');
    }
})

export default router;