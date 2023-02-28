import { defineStore } from 'pinia';
import { Names } from './store-name'

export const useTestStore = defineStore(Names.TEST, {
    state: () => {
        return {
            baseUrl: "http://localhost:8080"
        }
    },
    // 相当于 computed, 修饰一些值
    getters: {

    },
    // 相当于 method，可以做同步、异步都可以做，提交 state
    actions: {

    }
})