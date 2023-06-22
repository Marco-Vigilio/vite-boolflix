<template>
    <div class="item">
        <h1>{{ title }}</h1>
        <h2>{{ originalTitle }}</h2>
        <div v-if="language">
            <p>Ehy</p>
        </div>
        <h3>{{ language }}</h3>
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
            text: "",
        }
    },
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: String,
    },
    methods: {
        upperCaseText() {
            let idioma = this.language.toUpperCase();
            console.log(idioma);

            let ISO = "";

            this.store.arrayFlags.forEach(element => {
                //console.log(element);
                ISO = element.language.toUpperCase();
                if (idioma === ISO) {
                    console.log("ho il paese");
                }
            });


            /*
this.store.arrayFlags.forEach(element => {
    
});
*/
        },
    },

    beforeMount() {
        this.upperCaseText();
    },
}
</script>
<style lang="scss">
.item {
    border: 2px solid black;

    img {
        width: 70px;
    }
}
</style>