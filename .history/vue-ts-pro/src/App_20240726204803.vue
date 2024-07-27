<template>
	<div class="app-container">
		<div class="header">
			<router-link to="/home">主页</router-link>
			<router-link to="/about">关于</router-link>
		</div>
		<!-- 匹配路由的组件占位符 -->
		<router-view></router-view>
	</div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
	.app-container {
		width: 100%;
		.header {
			> a {
				text-decoration: none;
				color: #666;
				font-size: 18px;
				margin: 0 10px;
			}
		}
	}
</style>
