<script setup>
import { ref, reactive } from 'vue'

defineProps([])
</script>

<template>
    <header class="header">
        <div class="controlPanel">
            <div class="controlPanel_hide">
                <div class="controlPanel_left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-left-circle-fill menu_icon" viewBox="0 0 16 16">
                        <path
                            d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                    </svg>
                </div>
                <div class="controlPanel_right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-right-circle-fill menu_icon__hide" viewBox="0 0 16 16">
                        <path
                            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                    </svg>
                </div>
            </div>
        </div>

        <div class="account">
            <img class="userPhoto"
                src="https://images.unsplash.com/photo-1686172249094-8d0e7eeb6bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="" height="50" width="50">
            <p class="userName">UserName</p>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';


.header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    height: 80px;
    padding: 20px 35px;
    background-color: rgba(32, 33, 36, 1);
    ;
    min-width: 82vw;
}


.controlPanel {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_hide {
        display: flex;
        height: 30px;
    }

    .menu_icon {
        width: 30px;
        height: 30px;
        color: rgba(83, 83, 83, 1);
        margin-right: 15px;

        &__hide {
            width: 30px;
            height: 30px;
            color: rgba(83, 83, 83, 0.7);
            margin-right: 15px;
        }
    }
}

.account {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(83, 83, 83, 1);
    border-radius: 30px;
    padding: 5px;
    min-width: 100px;
    max-width: 400px;

    .userPhoto {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 5px;
    }

    .userName {
        color: white;
        font-size: 14px;
        padding-right: 3px;
    }
}

@media screen and (max-width: 1100px) {
    .header {
        min-width: 100vw;
    }
}
</style>