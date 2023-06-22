<template>
    <div class="item">
        <h1>{{ title }}</h1>
        <h2>{{ originalTitle }}</h2>
        <div v-if="verify === true">

            <img :src="imageFlag" :alt="nameFlag + ' flag'">
        </div>

        <h3 v-else>Original languages: {{ language }}</h3>

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
            nameFlag: "",
            verify: false,
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
            this.store.arrayLanguages.forEach(element => {
                let iso = element.iso;
                if (iso === lingua) {
                    this.imageFlag = element.image;
                    this.nameFlag = element.country;
                    this.verify = true;
                }

            });
        }
    },

    beforeMount() {
        this.show(this.language);
    },

    updated() {
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