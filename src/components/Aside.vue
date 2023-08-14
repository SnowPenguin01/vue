<script setup>
import Menu from './UI/Menu.vue'
</script>

<template>
    <div class="Aside">
        <div class="container">

            <Menu />

        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/main.scss';

.Aside {
    background-color: rgb(0, 0, 0);
    max-width: 100%;
}

.container {
    padding: 25px 30px;
    line-height: 30px;
}

@media screen and (max-width: 1100px) {
    .Aside {
        display: none;
    }
}
</style>