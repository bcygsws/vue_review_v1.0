/**
 * @name:user.ts
 * @description:用户store
 *
 * */
import {defineStore} from "pinia";
import useCounter from "@/store/counter.ts";

const usePerson = defineStore('user', {
    state: () => ({
        firstName: '张',
        lastName: '无极',
        gender: 'male',
        cars: [{id: 1, title: '兰博基尼'}, {id: 2, title: '沃斯'}]

    }),
    getters: {
        getFullName(state) {
            // 在当前user Store中引入其他store
            const counterStore = useCounter();
            return state.firstName + '-' + state.lastName + '-' + counterStore.name;
        }
    },
    actions: {}
});
export default usePerson;