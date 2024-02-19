/*
Descrizione:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
Bonus:
    -al click su una thumb, visualizzare in grande l'immagine corrispondente
    -applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
    -quando il cursore va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/


const { createApp } = Vue

createApp({
    data() {
        return {
            
            movies: [

                {
                    title: "Reservoir Dogs",
                    year: "1992",
                    image: "./img/reservoir-dogs.jpg"
                },
                {
                    title: "Pulp Fiction",
                    year: "1994",
                    image: "./img/pulp-fiction.jpg"
                },
                {
                    title: "Inglorious Basterds",
                    year: "2009",
                    image: "./img/inglorious-basterds.jpg"
                },
                {
                    title: "Django",
                    year: "2012",
                    image: "./img/django.jpg"
                },
                {
                    title: "The Hateful Eight",
                    year: "2015",
                    image: "./img/the-hateful-eight.jpg"
                }

            ]
        }
    },

    methods: {
        
    }

}).mount('#app');