<template>
    <div>
        <h1>Film</h1>
        <ItemFilm v-for="element in store.arrayObjectFilm" :title=element.title :originalTitle=element.original_title
            :language=element.original_language :vote=element.vote_average :image=element.poster_path />
    </div>
    <div>
        <h1>Serie Tv</h1>
        <ItemSerieTV v-for="element in store.arrayObjectSerieTv" :title=element.name :originalTitle=element.original_name
            :language=element.original_language :vote=element.vote_average :image=element.poster_path />

        <!--
        <div v-for="element in store.arrayFlags">
            <p>
                {{ element.name }} {{ element.language }}
            </p>
            <img :src="element.flag" :alt="element.name + ' image flag'">
        </div>
-->
    </div>
</template>
<script>
import ItemFilm from './ItemFilm.vue';
import ItemSerieTV from './ItemSerieTV.vue';
import { store } from "../store"
export default {
    name: "ViewItems",
    components: {
        ItemFilm,
        ItemSerieTV,
    },
    data() {
        return {
            store,
        }
    },

    methods: {
    },

    beforeMount() {
    },
}
</script>
<style lang="scss">
img {
    width: 70px;
}
</style>