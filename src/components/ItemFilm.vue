<template>
    <div class="item">
        <h1>{{ title }}</h1>
        <h2>{{ originalTitle }}</h2>
        <div>
            <h3>Original languages: {{ language }}</h3>
            <p>{{ imageFlag }}</p>
            <img :src="imageFlag" alt="">
        </div>


        <h4>{{ vote }}</h4>

    </div>
</template>
<script>

import { store } from "../store";
export default {
    name: "ItemFilm",
    data() {
        return {
            store,
            imageFlag: "",
        }
    },
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: String,
    },
    methods: {
        show(initials) {
            let lingua = initials;
            console.log(lingua);
            this.store.arrayLanguages.forEach(element => {
                let iso = element.iso;
                if (iso === lingua) {
                    console.log(element.image);
                    this.imageFlag = element.image;
                }
                console.log();
            });
        }
    },

    beforeMount() {
        this.show(this.language);
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