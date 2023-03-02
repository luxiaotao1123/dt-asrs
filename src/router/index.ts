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
    scrollBehavior: (to, from, savePosition) => {
        if (savePosition) {
            return savePosition;
        } else {
            return {
                top: 0
            }
        }
        // return new Promise((r) => {
        //     setTimeout(() => {
        //         r({
        //             top: 0
        //         })
        //     }, 1000)
        // })
    },
    routes
})

// 前置路由守卫
const whiteList = ['/', '/login']
router.beforeEach((to, from, next) => {
    if(whiteList.includes(to.path) || localStorage.getItem('token')) {
        next();
    } else {
        next('/');
    }
})

// 后置路由守卫
router.afterEach((to, from) => {

})

export default router;