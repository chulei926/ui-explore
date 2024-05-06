import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Topo from '../views/topo/index.vue'
import SSH from '../views/ssh/index.vue'
import Diff from '../views/diff/index.vue'

const routes: Array<RouteRecordRaw> = [
    {path: '', redirect: '/topo'},
    {path: '/topo', name: 'TOPO', meta: {}, component: Topo},
    {path: '/ssh', name: 'SSH', meta: {}, component: SSH},
    {path: '/diff', name: 'DIFF', meta: {}, component: Diff},
]

const router = createRouter({
    // history: createWebHistory(),    // 使用history模式
    history: createWebHashHistory(),	 // 使用hash模式
    routes
})

export default router
