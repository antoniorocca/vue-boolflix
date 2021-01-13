/* Trasformiamo il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da
permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5,
lasciando le restanti vuote (troviamo le icone in FontAwesome).
Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze
piene (o mezze vuote :P)
Trasformiamo poi la stringa statica della lingua in una vera e propria bandiera della
nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della
nazione ritornata dall’API (le flag non ci sono in FontAwesome).
Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca
dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando
attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di
risposta diversi, simili ma non sempre identici) */


let app = new Vue({
    el: "#app",
    data: {
        movies: [],
        tvSeries: [],
        searchText: '',
        languages: ['it','en','de','fr','es']
    },
    methods: {
        search() {
           let text = this.searchText;
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5c6e464b752913779cebe3099e1acb27&include_adult=false&query= ${text}`)
            .then(response => {
                console.log(response.data.results);
                this.movies = response.data.results;
            });
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=5c6e464b752913779cebe3099e1acb27&include_adult=false&query= ${text}`)
            .then(response => {
                console.log(response.data.results);
                this.tvSeries = response.data.results;
            });
        },
        roundVote(vote) {
           return Math.ceil(vote/2);
        },
        showFlag(lang) {
            return '../imgs/'+ lang + '.png';
        },
    }
});