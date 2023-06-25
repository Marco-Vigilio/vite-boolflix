<template>
    <div class="d-flex">
        <h1 class="bold">Voto:</h1>
        <i v-for="n in starsFull" class="fa-solid fa-star my_stars_full"></i>
        <i v-for="n in starsEmpty" class="fa-solid fa-star my_stars_empty"></i>
    </div>
</template>
<script>
export default {
    props: {
        voteSerieTV: String,
    },
    data() {
        return {
            starsFull: "",
            starsEmpty: "",
        }
    },
    methods: {
        showStarVote(numVote) {
            let num = Math.floor(numVote);
            num = num / 2;
            num = Math.ceil(num);
            this.starsFull = num;
            this.starsEmpty = 5 - this.starsFull;
        }
    },
    created() {
        this.showStarVote(this.voteSerieTV);
    },
    updated() {
        this.showStarVote(this.voteSerieTV);
    },
}
</script>
<style lang="scss" scoped>
.my_stars_full {
    color: rgb(255, 214, 63);
}

.my_stars_empty {
    color: rgb(138, 138, 138);
}
</style>