<template>
	<div>
		<router-link to="/home">主页</router-link>
		<router-link to="/about">关于</router-link>
    <!-- 匹配路由的组件占位符 -->
     <route
	</div>
	<HelloWorld msg="Vite + Vue" />
</template>
<script setup lang="ts"></script>
<style scoped>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.vue:hover {
		filter: drop-shadow(0 0 2em #42b883aa);
	}
</style>
