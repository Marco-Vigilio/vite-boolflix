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
            url: "https://api.themoviedb.org/3/search/movie?api_key=514cb42a7e6e0b17e72add7954487401",
            store,
        }
    },
    components: {
        Search,
        ViewItems,
    },
    methods: {
        apiObject(genericUrl) {
            axios.get(genericUrl)
                .then(risposta => {
                    this.store.arrayObject = [];
                    risposta.data.results.forEach(element => {
                        this.store.arrayObject.push(element);
                        console.log(element);
                    });
                });
        },

        wordOfMouth(word) {
            if (word === "") {
                this.apiObject(this.url);
            }
            else {
                console.log(word);
                let newUrl = this.url + "&query=" + word;
                console.log(newUrl);
                this.apiObject(newUrl);
            }

        },
    },
    updated() {
        this.wordOfMouth(word);
    },
}
</script>
<style lang="scss" scoped></style>

