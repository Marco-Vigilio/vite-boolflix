import { reactive } from "vue";
export const store = reactive({
    arrayObjectFilm: [],
    arrayObjectSerieTv: [],
    arrayFlags: [],
    arrayLanguages: [
        {
            iso: 'en',
            language: 'English',
            country: 'United Kingdom',
            image: 'https://it.wikipedia.org/wiki/Bandiera_del_Regno_Unito#/media/File:Flag_of_the_United_Kingdom_(1-2).svg'
        },
        {
            iso: 'es',
            language: 'Spanish',
            country: 'Spain',
            image: 'https://it.wikipedia.org/wiki/Bandiera_della_Spagna#/media/File:Flag_of_Spain.svg'
        },
        {
            iso: 'fr',
            language: 'French',
            country: 'France',
            image: 'https://it.wikipedia.org/wiki/File:Flag_of_France_(1794%E2%80%931815,_1830%E2%80%931974,_2020%E2%80%93present).svg'
        },
        {
            iso: 'de',
            language: 'German',
            country: 'Germany',
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg'
        },
        {
            iso: 'it',
            language: 'Italian',
            country: 'Italy',
            image: 'https://it.wikipedia.org/wiki/Bandiera_d%27Italia#/media/File:Flag_of_Italy.svg'
        },
        {
            iso: 'ja',
            language: 'Japanese',
            country: 'Japan',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg'
        },
        {
            iso: 'pt',
            language: 'Portuguese',
            country: 'Portugal',
            image: 'https://it.wikipedia.org/wiki/Bandiera_del_Portogallo#/media/File:Flag_of_Portugal.svg'
        },
        {
            iso: 'ru',
            language: 'Russian',
            country: 'Russia',
            image: 'https://it.wikipedia.org/wiki/Bandiera_della_Russia#/media/File:Flag_of_Russia.svg'
        },
        {
            iso: 'ar',
            language: 'Arabic',
            country: 'Egypt',
            image: 'https://it.wikipedia.org/wiki/Bandiera_dell%27Egitto#/media/File:Flag_of_Egypt.s'
        },
        {
            iso: 'zh',
            language: 'Chinese',
            country: 'China',
            image: "https://it.wikipedia.org/wiki/Bandiera_della_Repubblica_Popolare_Cinese#/media/File:Flag_of_the_People's_Republic_of_China.svg"
        },
        {
            iso: 'hi',
            language: 'Hindi',
            country: 'India',
            image: 'https://it.wikipedia.org/wiki/Bandiera_dell%27India#/media/File:Flag_of_India.svg'
        },
        {
            iso: 'ko',
            language: 'Korean',
            country: 'South Korea',
            image: 'https://it.wikipedia.org/wiki/File:Flag_of_South_Korea.svg'
        },
        {
            iso: 'nl',
            language: 'Dutch',
            country: 'Netherlands',
            image: 'https://it.wikipedia.org/wiki/Bandiera_dei_Paesi_Bassi#/media/File:Flag_of_the_Netherlands.svg'
        },
        {
            iso: 'pl',
            language: 'Polish',
            country: 'Poland',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg'
        },
        {
            iso: 'da',
            language: 'Danish',
            country: 'Denmark',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg'
        },
        {
            iso: 'sv',
            language: 'Swedish',
            country: 'Sweden',
            image: 'https://it.wikipedia.org/wiki/File:Flag_of_Sweden.svg'
        },
        {
            iso: 'lv',
            language: 'Latvian',
            country: 'Latvia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.sv'
        },
        {
            iso: 'el',
            language: 'Greek',
            country: 'Greece',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg'
        },
        {
            iso: 'ml',
            language: 'Malayalam',
            country: 'India',
            image: 'https://it.wikipedia.org/wiki/Bandiera_dell%27India#/media/File:Flag_of_India.svg'
        },
        {
            iso: 'sr',
            language: 'Serbian',
            country: 'Serbia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg'
        },
        {
            iso: 'no',
            language: 'Norwegian',
            country: 'Norway',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg'
        },
    ],
});