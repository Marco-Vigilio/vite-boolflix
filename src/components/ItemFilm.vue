<template>
    <div class="item d-flex">
        <div class="my_card">
            <img v-if="verifyImg === true" :src="img" :alt="title + ' poster'" />
            <p v-else>Image not available</p>
        </div>

        <div class="my_card_hover">
            <div class="">
                <h1 class="bold">Titolo</h1>
                <h1>{{ title }}</h1>
            </div>

            <div class="">
                <h1 class="bold">Titolo Originale</h1>
                <h1>{{ originalTitle }}</h1>
            </div>

            <div class="">
                <h1 class="bold">Original languages:</h1>
                <img v-if="verifyFlag === true" :src="imageFlag" :alt="nameFlag + ' flag'">
                <h1 v-else> {{ language }}</h1>
            </div>


            <FilmVote :voteFilm=vote />

            <div class="">
                <h1 class="bold">OverView:</h1>
                <h1>{{ overview }}</h1>
            </div>
        </div>

    </div>
</template>
<script>
import FilmVote from "./FilmVote.vue";
import { store } from "../store";
export default {
    name: "ItemFilm",
    components: {
        FilmVote,
    },
    data() {
        return {
            store,
            imageFlag: "",
            nameFlag: "",
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
        overview: String,
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
<style lang="scss">
.item {
    position: relative;
    display: flex;
    width: calc(100% / 5);
    margin-bottom: 2.5rem;

    .my_card {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;

        p {
            color: white;
        }

        img {
            width: 100%;
            display: block;
            object-fit: contain;
        }
    }

    .my_card_hover {
        display: none;
        width: 100%;
        height: 100%;
        overflow: auto;

        div {
            margin-bottom: 1.5rem;
        }

        img {
            width: 50px;
        }
    }

    &:hover .my_card_hover {
        position: absolute;
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.9);
        color: white;
        display: block;

        h1 {
            font-size: .9rem;
            font-weight: 400;
        }

        .bold {
            font-weight: bold;
        }
    }

}
</style>