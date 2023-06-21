<template>
    <div>
        <input type="text" v-model="text">
        <button @click="$emit('parola', text)">Invia</button>
    </div>
</template>
<script>
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