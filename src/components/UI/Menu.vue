<script setup>
import { ref, reactive } from 'vue'
import MenuButton from './MenuButton.vue';

const mainButtons = ref([
    {
        class: 'bi bi-house menu_icon',
        path: 'M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z',
        title: 'Home',
        to: "/",
    },
    {
        class: 'bi bi-search menu_icon',
        path: 'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z',
        title: 'Search',
        to: "/search",
    },
    {
        class: 'bi bi-collection menu_icon',
        path: 'M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z',
        title: 'Your Library',
        to: "/library",
    },
])

const btnForPlaylist = ref([
    {
        class: 'bi bi-plus-square-fill menu_icon',
        path: 'M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z',
        title: 'Create Playlist',
        to: "/",
    },
    {
        class: 'bi bi-heart-fill menu_icon',
        path: 'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z',
        title: 'Liked Songs',
        to: "/",
    },
])
</script>

<template>
    <div class="main-menu">
        <div class="menu">
            <a href="">
                <MenuButton v-for="(props, i) in mainButtons" :key="i" :class="props.class" :path="props.path"
                    :title="props.title" :to="props.to" />
            </a>
        </div>


        <div class="menuLibrary">
            <a href="">
                <MenuButton v-for="(props, i) in btnForPlaylist" :key="i" :class="props.class" :path="props.path"
                    :title="props.title" :to="props.to" />
            </a>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.main-menu {
    position: fixed;
}

.menu {
    padding-bottom: 20px;
    max-width: 400px;
}

.menuLibrary {
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(83, 83, 83);
}
</style>