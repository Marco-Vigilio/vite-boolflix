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
        <SerieTvVote :voteSerieTV=vote />
    </div>
</template>
<script>
import { store } from "../store";
import SerieTvVote from "./SerieTvVote.vue";
export default {
    components: {
        SerieTvVote,
    },
    data() {
        return {
            store,
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
<style lang="scss"></style>