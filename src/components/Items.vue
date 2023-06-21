<template>
    <div class="item">
        <h1>{{ title }}</h1>
        <h2>{{ originalTitle }}</h2>
        <div v-if="flag !== ''">
            <p>Original Language</p>
            <img :src="flag" alt="">
        </div>
        <h3 v-else>{{ language }}</h3>
        <h4>{{ vote }}</h4>
    </div>
</template>
<script>

import { store } from "../store";
export default {
    name: "Item",
    data() {
        return {
            store,
            flags: [
                {
                    language: "en",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg",
                },
                {
                    language: "es",
                    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
                },
                {
                    language: "it",
                    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
                },
                {
                    language: "fr",
                    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
                },
                {
                    language: "al",
                    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
                },
                {
                    language: "ar",
                    image: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
                },
                {
                    language: "bn",
                    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
                },
                {
                    language: "ch",
                    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Guam.svg",
                },
                {
                    language: "zh",
                    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
                },
                {
                    language: "ko",
                    image: "hhttps://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
                },
                {
                    language: "hr",
                    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
                },
                {
                    language: "da",
                    image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
                },
                {
                    language: "el",
                    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
                },
                {
                    language: "ga",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg",
                },
                {
                    language: "in",
                    image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg",
                },
                {
                    language: "ms",
                    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
                },
                {
                    language: "nl",
                    image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg",
                },
                {
                    language: "pt",
                    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
                },
                {
                    language: "ro",
                    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
                },
                {
                    language: "sr",
                    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_Serbia_and_Montenegro_%281992%E2%80%932006%29.svg",
                },
                {
                    language: "sd",
                    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
                },
                {
                    language: "sv",
                    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
                },
                {
                    language: "sw",
                    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
                },
                {
                    language: "ss",
                    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
                },
                {
                    language: "tr",
                    image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
                },
                {
                    language: "hu",
                    image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg",
                },
                {
                    language: "ur",
                    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
                },
                {
                    language: "ja",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/280px-Flag_of_Japan.svg.png",
                },
                {
                    language: "pl",
                    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
                },
            ],
            flag: "",
        }
    },
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: String,
    },
    methods: {
        createFlag() {
            this.flags.forEach(element => {
                if (element.language === this.language) {
                    this.flag = element.image;
                }
            });
        }
    },
    created() {
        this.createFlag();
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