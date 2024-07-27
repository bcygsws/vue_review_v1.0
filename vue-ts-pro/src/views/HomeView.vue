<template>
  <div>
    <h1>这是HomeView组件</h1>
    <!--引入子组件-->
    <UsingPinia/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import UsingPinia from "@/components/UsingPinia.vue";

export default defineComponent({
  components: {UsingPinia}
})
</script>

<style lang="scss" scoped></style>
