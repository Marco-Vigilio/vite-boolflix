<template>
    <div>
        <Items v-for="element in store.arrayObject" :title=element.title :originalTitle=element.original_title
            :language=element.original_language :vote=element.vote_average />
    </div>
</template>
<script>
import Items from './Items.vue';
import { store } from "../store"
export default {
    name: "ViewItems",
    components: {
        Items,
    },
    data() {
        return {
            store,
        }
    }
}
</script>
<style lang="scss"></style>