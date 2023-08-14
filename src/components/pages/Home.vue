<script setup>
import { ref, reactive } from 'vue'

import ControlPanel from '../UI/ControlPanel.vue';
import Catalog from '../UI/Catalog.vue';


</script>

<template>
    <div class="home">
        <ControlPanel />
        <Catalog />
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