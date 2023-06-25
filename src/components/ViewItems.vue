<template>
    <div class="my_contain">
        <h1>Film</h1>
        <div class="d-flex flex-wrap ">
            <ItemFilm v-for="element in store.arrayObjectFilm" :title=element.title :originalTitle=element.original_title
                :language=element.original_language :vote=element.vote_average :image=element.poster_path
                :overview=element.overview />
        </div>

        <h1>Serie Tv</h1>
        <div class="d-flex flex-wrap ">
            <ItemSerieTV v-for="element in store.arrayObjectSerieTv" :title=element.name
                :originalTitle=element.original_name :language=element.original_language :vote=element.vote_average
                :image=element.poster_path :overview=element.overview />
        </div>
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
<style lang="scss" scoped>
.my_contain {
    background-color: rgb(58, 52, 52);
}

img {
    width: 70px;
}

h1 {
    text-align: center;
    color: white;
    margin: 3rem;
}
</style>