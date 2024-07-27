<template>
  <div class="pinia-container">
    <h3> 一、UsingPinia组件</h3>
    <!--看count值是否改变了？没有变，问题出在解构破坏了响应式特性-->
    <button @click="clickHandler">+1</button>
    <button @click="patchState">$patch方法</button>
    <button @click="resetState">$reset方法</button>
    <button @click="replaceState">$state置换方法</button>
    <div class="result">
      <span>count值：{{ count }}</span>
      <!--不解构counterStore对象获取pinia中的state变量值 -->
      <!--<p>{{ counterStore.count }}</p>-->
      <span>name值：{{ counterStore.name }}</span>
      <!--使用getters获取count的二倍值-->
      <span>count二倍值：{{ counterStore.getDouble }}</span>
      <!--使用getters传参，设置count的n倍值-->
      <span>count二倍值：{{ counterStore.addNIncrement(3) }}</span>
      <span>height值：{{ counterStore.height }}</span>

    </div>
    <!--使用actions获取异步数据-->
    <ul class="list">
      <li v-for="(item,index) in counterStore.bannerList" :key="index">
        <div class="info">
          <img :src="item['image']" width="150" alt=""/>
          <div class="right">
            <div class="title">{{ item['title'] }}</div>
            <div class="acm">{{ item['acm'] }}</div>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>
<script lang="ts" setup>
import useCounter from "@/store/counter.ts";
// import {toRefs} from "vue";
import {storeToRefs} from "pinia";
import {onBeforeMount} from "vue";

const counterStore = useCounter();
/**
 *  注意：
 *  参考文档：https://www.jb51.net/javascript/293122bjx.htm
 *  1.直接解构，拿到state中count变量不是响应式的
 *  2.解构的count,在按钮点击+1时，已经丢失响应式
 *  解决：toRefs()和storeToRefs()
 *  3.倘若不解构：counterStore.name可以直接进行读写，改变state的状态，不需要使用actions编写额外的函数
 *  4.state状态的修改
 *  4.1 不解构时，可以拿到变量后直接读和写，比如：counterStore.name+="abc"
 *  4.2 重置state的状态; counterStore.$reset()
 *  4.3 部分改变state中某几个变量的状态
 *  counterStore.$patch({
 *
 *  })
 *  4.4 置换state
 *  counterStore.$state={
 *
 *  }
 *
 *  
 *
 *
 *
 * */
// const {count} = counterStore;// 丢失了响应式
// 解决一
// const {count} = toRefs(counterStore);
// 解决二
const {count} = storeToRefs(counterStore);
const clickHandler = () => {
  // 更改store中的count变量值，在actions中处理
  counterStore.increment();
  counterStore.name += "abc";
}
// counterStore.$patch更改state中某几个值的状态
const patchState = () => {
  counterStore.$patch({
    name: "李文珊",
    height: 187
  })
}
// counterStore.$reset重置state中所有值状态为初始值
const resetState = () => {
  counterStore.$reset();
}
// 将state状态置换
const replaceState = () => {
  counterStore.$state = {
    name: '李二二',
    height: 200,
    count: 9,
    bannerList: []
  }
}
// 在挂载阶段，请求数据列表
onBeforeMount(() => {
  counterStore.fetchListAsync();
})
</script>
<style lang="scss" scoped>
.pinia-container {
  .result {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    span {
      height: 50px;
      line-height: 50px;
      background-color: #dddddd;

      &:nth-child(2n+1) {
        background-color: #ffffff;
      }
    }


  }

  ul.list {
    padding: 0;

    li {
      list-style: none;
      padding: 10px;

      .info {
        display: flex;
        flex-flow: row nowrap;

        .right {
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: flex-start;
          padding-left: 20px;

          .title {
            font: normal 500 16px "Arial";
            margin: 5px 0;
          }

          .acm {
            font-size: 12px;
            margin: 5px 0;
          }
        }
      }
    }
  }

}
</style>
