import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/pages/Home.vue'
import Playlist from './components/pages/Playlist.vue'
import Search from './components/pages/Search.vue'


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
        component: Playlist,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router