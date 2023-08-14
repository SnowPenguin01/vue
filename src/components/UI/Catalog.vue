<script setup>
import { ref, reactive } from 'vue'

defineProps(['catalogImg', 'playlistTitle', 'playlistDescription'])

const TopDay = ref([
    {
        catalogImg: 'https://images.unsplash.com/photo-1688890260360-e50f5b17ed55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        playlistTitle: 'Playlist Top of the day',
        playlistDescription: 'Most popular songs of the day',
    },
    {
        catalogImg: 'https://images.unsplash.com/photo-1688890260360-e50f5b17ed55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        playlistTitle: 'Playlist Top of the day',
        playlistDescription: 'Most popular songs of the day',
    },
    {
        catalogImg: 'https://images.unsplash.com/photo-1688890260360-e50f5b17ed55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        playlistTitle: 'Playlist Top of the day',
        playlistDescription: 'Most popular songs of the day',
    },
    {
        catalogImg: 'https://images.unsplash.com/photo-1688890260360-e50f5b17ed55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        playlistTitle: 'Playlist Top of the day',
        playlistDescription: 'Most popular songs of the day',
    },
])

const Top40 = ref([
    {
        catalogImg: 'https://images.unsplash.com/photo-1688890260360-e50f5b17ed55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        playlistTitle: 'Playlist Top 40',
        playlistDescription: 'Most popular songs top 40',
    },
    {
        catalogImg: 'https://images.unsplash.com/photo-1688890260360-e50f5b17ed55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        playlistTitle: 'Playlist Top 40',
        playlistDescription: 'Most popular songs top 40',
    },
    {
        catalogImg: 'https://images.unsplash.com/photo-1688890260360-e50f5b17ed55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        playlistTitle: 'Playlist Top 40',
        playlistDescription: 'Most popular songs top 40',
    },
    {
        catalogImg: 'https://images.unsplash.com/photo-1688890260360-e50f5b17ed55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        playlistTitle: 'Playlist Top 40',
        playlistDescription: 'Most popular songs top 40',
    },
])


</script>

<template>
    <div class="container">

        <h2 class="catalog_title">Music of the day</h2>
        <div class="catalog">
            <div class="playlist" v-for="(props, i) in TopDay" :key="i">
                <div class="img">
                    <img :src="props.catalogImg" alt="" class="playlist_img">
                </div>
                <p class="playlist_title">{{ props.playlistTitle }}</p>
                <p class="playlist_description">{{ props.playlistDescription }}</p>
            </div>
        </div>
        <h2 class="catalog_title">Top 40</h2>
        <div class="catalog">
            <div class="playlist" v-for="(props, i) in Top40" :key="i">
                <div class="img">
                    <img :src="props.catalogImg" alt="" class="playlist_img">
                </div>
                <p class="playlist_title">{{ props.playlistTitle }}</p>
                <p class="playlist_description">{{ props.playlistDescription }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    margin-top: 80px;
    padding: 20px 35px;
}

.catalog {
    display: flex;
    justify-content: space-around;
    gap: 10px;
    padding: 10px;

    &_title {
        padding-bottom: 20px;
        color: white;
        font-size: 24px;
    }
}

.playlist {
    height: 325px;
    max-width: 280px;
    background-color: rgb(19, 19, 19);
    padding: 15px 5px;
    border-radius: 3px;
    margin-bottom: 20px;


    .img {
        text-align: center;
    }

    &_img {
        width: 250px;
        height: 250px;
        padding-bottom: 20px;
        border-radius: 3px;
    }

    &_title {
        color: white;
        font-size: 16px;
    }

    &_description {
        color: white;
        font-size: 14px;
    }
}

@media screen and (max-width: 1350px) {

    .catalog {
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 10px 0;

        &_title {
            font-size: 20px;
        }
    }

    .playlist {
        height: 300px;
        max-width: 250px;
        padding: 10px 5px;


        &_img {
            width: 225px;
            height: 225px;
        }

        &_title {
            font-size: 14px;
        }

        &_description {
            font-size: 12px;
        }
    }
}

@media screen and (max-width: 960px) {

    .catalog {

        padding: 10px 0;

        &_title {
            font-size: 20px;
        }
    }

    .playlist {
        height: 300px;
        max-width: 250px;
        padding: 10px 5px;


        &_img {
            width: 225px;
            height: 225px;
        }

        &_title {
            font-size: 14px;
        }

        &_description {
            font-size: 12px;
        }
    }
}

@media screen and (max-width: 550px) {
    .catalog {
        justify-content: center;
        padding: 10px 0;

        &_title {
            font-size: 20px;
        }
    }

    .playlist {
        height: 300px;
        width: 400px;
        padding: 10px 5px;


        &_img {
            width: 225px;
            height: 225px;
        }

        &_title {
            font-size: 14px;
        }

        &_description {
            font-size: 12px;
        }
    }
}
</style>
