import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/UI/Home.vue'
import HeaderPlaylist from './components/UI/HeaderPlaylist.vue'
import Search from './components/UI/Search.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/search',
        name: 'search',
        component: Search,
    },
    {
        path: '/library',
        name: 'library',
        component: HeaderPlaylist,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router