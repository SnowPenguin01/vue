<script setup>
import { ref, reactive } from 'vue'

defineProps(['title', 'class', 'path', 'to'])
</script>

<template>
    <router-link :to="to" class="menuButton">
        <div class="menu_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" :class="class"
                viewBox="0 0 16 16">
                <path :d="path" />
            </svg>
        </div>
        <div class="menu_link">
            <p class="menu_title">{{ title }}</p>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

.menu {

    &Button {
        display: flex;
        margin-bottom: 5px;

    }

    &Button:hover {
        .menu_title {
            display: block;
            color: rgb(35, 184, 109);
            padding-left: 3px;
        }

        .menu_icon {
            color: rgb(35, 184, 109);
        }
    }

    &_title {
        display: block;
        color: #fff;
    }

    &_icon {
        width: 25px;
        height: 25px;
        color: #fff;
        margin: 1px 15px 0 0;
    }
}
</style>