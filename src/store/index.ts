import { defineStore } from 'pinia';
import { Names } from './store-name'

export const useTestStore = defineStore(Names.TEST, {
    state: () => {
        return {
            baseUrl: ""
        }
    },
    // 相当于 computed, 修饰一些值
    getters: {
        newBaseUrl():string {
            return this.baseUrl + "/new"
        },
        otherVal():string {
            return `${this.newBaseUrl}/other`
        }
    },
    // 相当于 method，可以做同步、异步都可以做，提交 state
    actions: {
        modifyUrl(val:string) {
            this.baseUrl = val;
        },
        async getUserInfo() {
            const result = await login();  
            this.baseUrl = result.name;
        }
    }
})

// 以下为模拟异步请求
type User = {
    name:string,
    age:number
}
const login = ():Promise<User> => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve({
                name: "vincent",
                age: 29
            })
        }, 1000);
    })
}

