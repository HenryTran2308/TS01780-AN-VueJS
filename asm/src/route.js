import { createRouter, createWebHistory } from 'vue-router'
import DangKy from './components/DangKy.vue'
import DangNhap from './components/DangNhap.vue'
import TrangChu from './components/TrangChu.vue'
import PostBaiViet from './components/DangBaiViet.vue'
import ChiTietBai from './components/ChiTietBai.vue'
import TrangCaNhan from './components/TrangCaNhan.vue'

const routes = [
    { path: '/dangky', component: DangKy },
    { path: '/dangnhap', component: DangNhap },
    { path: '/trangchu', component: TrangChu },
    { path: '/dangbai', component: PostBaiViet },
    { path: '/chitietbai', component: ChiTietBai },
    { path: '/trangcanhan', component: TrangCaNhan },
    { path: '/', redirect: '/dangnhap' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router