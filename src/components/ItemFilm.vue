<template>
    <div class="item">
        <h1>{{ title }}</h1>
        <h2>{{ originalTitle }}</h2>

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
    },

    beforeMount() {
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