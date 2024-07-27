<template>
	<div class="app-container">
		<router-link to="/home">主页</router-link>
		<router-link to="/about">关于</router-link>
		<!-- 匹配路由的组件占位符 -->
		<router-view></router-view>
	</div>
</template>
<script setup lang="ts"></script>
<style lang=""scoped>
</style>
