<script setup>
import ControlPanel from './ControlPanel.vue';
</script>

<template>
    <div class="home">
        <ControlPanel />
        <div class="container">
            <h1 class="title">Home Page</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding: 20px 35px;

    .title {
        color: white;
    }
}
</style>