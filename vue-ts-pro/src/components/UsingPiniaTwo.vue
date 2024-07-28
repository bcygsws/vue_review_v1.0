<!--
*@name: UsingPiniaTwo
*@author: Bao Chengyi
*@date: 2024/7/28 3:47
-->
<template>
  <div>
    <h3>三、UsingPinia组件</h3>
    <p>名字：{{ personStore.getFullName }}</p>
    <button @click="clickHandler">修改UsingPinia中的count值</button>
    <p>count值：{{ counterStore.count }}</p>

  </div>
</template>
<script lang="ts" setup>
import usePerson from "@/store/user";
import useCounter from "@/store/counter.ts";

const personStore = usePerson();
const counterStore = useCounter();
// 直接修改count值
const clickHandler = () => {
  counterStore.count++;
}


</script>

<style lang="scss" scoped>

</style>