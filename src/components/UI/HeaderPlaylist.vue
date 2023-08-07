<script setup>
import { ref, reactive } from 'vue'
import ControlPanel from './ControlPanel.vue';

</script>

<template>
    <div class="play">
        <div class="bg">

            <ControlPanel />

            <div class="playList">
                <div class="image">
                    <img src="https://images.unsplash.com/photo-1688890260360-e50f5b17ed55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="" class="playList_image">
                </div>
                <div class="playList_Content">
                    <p class="witchPlayList">PUBLIC PLAYLIST</p>
                    <h1 class="namePlayList">Playlist name</h1>
                    <p class="descriptionPlayList">
                        Description for playlist
                    </p>
                    <div class="playList_info">
                        <div class="user">
                            <img class="user_photo"
                                src="https://images.unsplash.com/photo-1686172249094-8d0e7eeb6bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                alt="" height="50" width="50">
                        </div>
                        <div class="songs">
                            <p>0 songs</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="bglist">

        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/main.scss';

.play {
    display: grid;
    grid-template-rows: 40% 60%;
    background: linear-gradient(180deg, rgba(244, 242, 242, 1) 0%, rgba(32, 33, 36, 1) 50%, rgba(32, 33, 36, 1) 100%);
}

// .bg {
//     height: 290px;
//     width: 100%;
//     // margin: 20px 0 35px;
//     // padding: 20px 35px;
// }


.playList {
    display: flex;
    padding: 20px 35px;

    &_image {
        height: 250px;
        width: 250px;
    }

    &_Content {
        margin-left: 25px;

        .witchPlayList {
            padding-top: 35px;
            font-size: 12px;
            color: #fff;
        }

        .namePlayList {
            font-size: 64px;
            color: #fff;
            font-weight: bold;
            padding-bottom: 40px;
        }

        .descriptionPlayList {
            padding-bottom: 10px;
            color: rgba(218, 218, 218, 0.5);
        }
    }

    &_info {
        display: flex;
        align-items: center;

        .user {
            &_photo {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                margin-right: 5px;
                padding-right: 5px;
            }
        }

        .songs {
            color: rgba(218, 218, 218, 0.5);
        }
    }
}

.bglist {
    background-color: rgba(32, 33, 36, 0.3);
    height: 100%;
}
</style>