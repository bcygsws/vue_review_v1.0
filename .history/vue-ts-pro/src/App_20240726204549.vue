<template>
	<div class="app-container">
    <div class>

    </div>
		<router-link to="/home">主页</router-link>
		<router-link to="/about">关于</router-link>
		<!-- 匹配路由的组件占位符 -->
		<router-view></router-view>
	</div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
	.app-container {
		width: 100%;
    >a{

    }
	}
</style>
