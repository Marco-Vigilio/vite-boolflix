import { reactive } from "vue";
export const store = reactive({
    arrayObjectFilm: [],
    arrayObjectSerieTv: [],
    arrayFlags: [],
    languages: [
        {
            iso: 'en',
            language: 'English',
            country: 'United Kingdom',
            image: 'https://example.com/uk.jpg'
        },
        {
            iso: 'es',
            language: 'Spanish',
            country: 'Spain',
            image: 'https://example.com/spain.jpg'
        },
        {
            iso: 'fr',
            language: 'French',
            country: 'France',
            image: 'https://example.com/france.jpg'
        },
        {
            iso: 'de',
            language: 'German',
            country: 'Germany',
            image: 'https://example.com/germany.jpg'
        },
        {
            iso: 'it',
            language: 'Italian',
            country: 'Italy',
            image: 'https://example.com/italy.jpg'
        },
        {
            iso: 'ja',
            language: 'Japanese',
            country: 'Japan',
            image: 'https://example.com/japan.jpg'
        },
        {
            iso: 'pt',
            language: 'Portuguese',
            country: 'Portugal',
            image: 'https://example.com/portugal.jpg'
        },
        {
            iso: 'ru',
            language: 'Russian',
            country: 'Russia',
            image: 'https://example.com/russia.jpg'
        },
        {
            iso: 'ar',
            language: 'Arabic',
            country: 'Egypt',
            image: 'https://example.com/egypt.jpg'
        },
        {
            iso: 'zh',
            language: 'Chinese',
            country: 'China',
            image: 'https://example.com/china.jpg'
        },
        {
            iso: 'hi',
            language: 'Hindi',
            country: 'India',
            image: 'https://example.com/india.jpg'
        },
        {
            iso: 'ko',
            language: 'Korean',
            country: 'South Korea',
            image: 'https://example.com/south-korea.jpg'
        },
        {
            iso: 'nl',
            language: 'Dutch',
            country: 'Netherlands',
            image: 'https://example.com/netherlands.jpg'
        },
    ],
});