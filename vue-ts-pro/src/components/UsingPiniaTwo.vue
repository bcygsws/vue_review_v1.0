<!--
*@name: UsingPiniaTwo
*@author: Bao Chengyi
*@date: 2024/7/28 3:47
-->
<template>
  <div>
    <h2></h2>
    <p>名字：{{ personStore.getFullName}}</p>
  </div>
</template>
<script lang="ts" setup>
import usePerson from "@/store/user";

const personStore = usePerson();


</script>

<style lang="scss" scoped>

</style>