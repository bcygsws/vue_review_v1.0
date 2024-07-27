import {defineStore} from 'pinia';

const useCounter = defineStore('counter', {
    state: () => ({
        count: 1,
        name: "百里东君",
        height: 172,
        bannerList: []
    }),
    getters: {
        getDouble(state) {
            return state.count * 2;
        },
        addNIncrement(state) {
            // 不传倍数值，默认也是2倍
            return function (n: number = 2) {
                return state.count * n;
            }
        }
    },
    actions: {
        increment() {// 写成这种形式，而不是键值对箭头函数的方式，否则this指向报可能为undefined的错误
            this.count++;
        },
        async fetchListAsync() {
            const URL = "http://123.207.32.32:8000/home/multidata";
            const resJson = await fetch(URL);
            const data = await resJson.json();
            console.log(data);
            this.bannerList = data.data['banner'].list;

        }
    }
});
export default useCounter;
