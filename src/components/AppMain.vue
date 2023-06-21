<template>
    <main>
        <Search @parola="wordOfMouth" />
        <ViewItems />
    </main>
</template>
<script>
import axios from 'axios';
import { store } from '../store';
import Search from './Search.vue';
import ViewItems from './ViewItems.vue';
export default {
    name: "AppMain",
    data() {
        return {
            urlFilm: "https://api.themoviedb.org/3/search/movie?api_key=514cb42a7e6e0b17e72add7954487401",
            urlSerieTV: "https://api.themoviedb.org/3/search/tv?api_key=514cb42a7e6e0b17e72add7954487401",
            store,
        }
    },
    components: {
        Search,
        ViewItems,
    },
    methods: {
        apiObjectFilm(genericUrl) {
            axios.get(genericUrl)
                .then(risposta => {
                    this.store.arrayObject = [];
                    risposta.data.results.forEach(element => {
                        this.store.arrayObject.push(element);
                        //console.log(element);
                    });
                });
        },

        apiObjectSerieTV(genericUrl) {
            axios.get(genericUrl)
                .then(risposta => {
                    console.log(risposta);
                });
        },

        wordOfMouth(word) {
            if (word === "") {
                this.apiObjectFilm(this.urlFilm);
            }
            else {
                let newUrl = this.urlFilm + "&query=" + word;
                this.apiObjectFilm(newUrl);
                this.apiObjectSerieTV(newUrl)
            }

        },
    },
    updated() {
        this.wordOfMouth(word);
    },
}
</script>
<style lang="scss" scoped></style>

