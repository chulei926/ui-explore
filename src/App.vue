<template>
	<div class="app-container">
		<ul class="nav-tab">
			<li class="tab" v-for="nav in navs" :class="{selected: nav.selected}" @click="tabClick(nav)">{{ nav.title }}</li>
		</ul>
		<div class="container-box">
			<router-view/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {getCurrentInstance, ref} from "vue";

const {proxy} = getCurrentInstance();

const navs: any = ref([
	{title: 'TOPO', path: '/topo', selected: false},
	{title: 'SSH', path: '/ssh', selected: false},
	{title: 'DIFF', path: '/diff', selected: false}
])


const init = () => {
	updateSelected(proxy.$route.fullPath);
}

const tabClick = (nav: any) => {
	updateSelected(nav.path);
	proxy.$router.push({path: nav.path})
}

const updateSelected = (curPath: string) => {
	navs.value.forEach((nav: any) => {
		nav.selected = curPath && curPath.startsWith(nav.path);
	})
}
setTimeout(() => {
	init()
}, 100)
</script>

<style lang="scss" scoped>
.app-container {
	display: flex;
	flex-direction: column;
	padding: 0;

	.nav-tab {
		width: 100%;
		background-color: #ffffff;
		padding: 0;
		flex-grow: 0;
		display: flex;
		align-items: center;
		border-bottom: 1px solid rgb(204, 223, 251);

		.tab {
			width: 130px;
			height: 40px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			font-size: 14px;
			font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.6);
			cursor: pointer;
			border-bottom: 3px solid #ffffff;
			user-select: none;
		}

		.tab.selected {
			color: #4477EE;
			border-bottom: 3px solid #4477EE;
		}

		.tab:hover {
			color: #4477EE;
		}
	}

	.container-box {
		flex-grow: 1;
		height: calc(100vh - 44px);
		overflow-y: auto;
	}
}
</style>
