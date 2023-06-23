<template>
    <div class="item">
        <div v-if="verifyImg === true">
            <img :src="img" :alt="title + ' poster'" />

        </div>
        <div v-else>
            <p>Image not available</p>
        </div>

        <h1>{{ title }}</h1>
        <h2>{{ originalTitle }}</h2>
        <div v-if="verifyFlag === true">
            <img :src="imageFlag" :alt="nameFlag + ' flag'">
        </div>
        <h3 v-else>Original languages: {{ language }}</h3>
        <FilmVote :voteFilm=vote />
    </div>
</template>
<script>
import FilmVote from "./FilmVote.vue";
import { store } from "../store";
export default {
    name: "ItemFilm",
    components: {
        FilmVote,
    },
    data() {
        return {
            store,
            imageFlag: "",
            nameFlag: "",
            verifyFlag: false,
            img: "",
            verifyImg: false,
        };
    },
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: String,
        image: String,
    },
    methods: {
        show(initials) {
            let lingua = initials;
            this.store.arrayLanguages.forEach(element => {
                let iso = element.iso;
                if (iso === lingua) {
                    this.imageFlag = element.image;
                    this.nameFlag = element.country;
                    this.verifyFlag = true;
                }
            });
        },
        createImage(coverImage) {
            if ((isNaN(coverImage))) {
                this.img = this.store.urlImage + coverImage;
                this.verifyImg = true;
            }
        },
    },
    beforeMount() {
        this.show(this.language);
        this.createImage(this.image);
    },
    updated() {
        this.show(this.language);
        this.createImage(this.image);
    },

}
</script>
<style lang="scss">
.item {
    border: 2px solid black;

    img {
        width: 200px;
    }
}
</style>