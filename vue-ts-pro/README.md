# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# Pinia 的使用

## Pinia 优点

-   架构设计，vuex 采用全局单例模式，只有一个 store 来管理所有的状态；而 pinia 采用分离模式，每个组件都有自己的 store
-   模块化设计：vuex 有 state、getters、mutations、actions、modules 五个模块，而 pinia 只有 state、getters、actions 三个模块
-   更好的 ts 支持
-   体积更小，只有 1kb 左右；因为它使用了 es6 语法和新的数据处理方式
-   [参考文档](https://www.jianshu.com/p/fa7b26d11a8d)

## Pinia 的使用

-   [参考文档](https://www.jb51.net/javascript/293122bjx.htm)
