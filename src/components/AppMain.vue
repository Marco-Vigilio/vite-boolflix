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
            ulrFlags: "https://restcountries.com/v3.1/all",
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
                    this.store.arrayObjectFilm = [];
                    risposta.data.results.forEach(element => {
                        this.store.arrayObjectFilm.push(element);
                        //console.log(element);
                    });
                });
        },

        apiObjectSerieTV(genericUrl) {
            axios.get(genericUrl)
                .then(risposta => {
                    this.store.arrayObjectSerieTv = [];

                    risposta.data.results.forEach(element => {
                        this.store.arrayObjectSerieTv.push(element);
                        //console.log(element.name);
                        //console.log(element.original_name);
                        //console.log(element.original_language);
                        //console.log(element.vote_average);
                    });
                });
        },

        wordOfMouth(word) {
            if (word === "") {
                this.apiObjectFilm(this.urlFilm);
                this.apiObjectSerieTV(this.urlSerieTV)
            }
            else {
                let newUrlFilm = this.urlFilm + "&query=" + word;
                let newUrlSerieTV = this.urlSerieTV + "&query=" + word;
                this.apiObjectFilm(newUrlFilm);
                this.apiObjectSerieTV(newUrlSerieTV);
            }

        },

        flags(genericUrl) {
            axios.get(genericUrl)
                .then(risposta => {
                    console.log(risposta.data);
                    risposta.data.forEach(element => {
                        console.log(element);
                        console.log(element.languages);
                        console.log(element.name.common);
                        console.log();
                        //console.log(element.altSpellings[0]);
                        //console.log(element.flags.svg);
                        //console.log(element.name.common);

                        let country = {
                            name: element.name.common,
                            language: element.cca2,
                            flag: element.flags.svg,
                        }
                        this.store.arrayFlags.push(country);
                    });
                    //console.log(this.store.arrayFlags);
                });
        },

    },
    created() {
        this.flags(this.ulrFlags);
    },

    updated() {
        this.wordOfMouth(word);
    },
}
</script>
<style lang="scss" scoped></style>

