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
    data() {
        return {
            store,
        }
    },
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: String,
    },
}
</script>
<style lang="scss"></style>