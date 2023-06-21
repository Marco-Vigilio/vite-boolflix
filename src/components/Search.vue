<template>
    <div>
        <h2>Sono Search</h2>
        <input type="text" v-model="text">
        <button @click="$emit('parola', text)">Invia</button>
    </div>
</template>
<script>
import { store } from '../store';
export default {
    name: "Search",
    data() {
        return {
            text: "",
        }
    },
    methods: {
    },
}
</script>
<style lang="" scoped>
    
</style>