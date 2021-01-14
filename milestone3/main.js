/* In questa milestone come prima cosa aggiungiamo la copertina del film o della serie
al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL, questo
perché poi potremo generare da quella porzione di URL tante dimensioni diverse.
Dovremo prendere quindi l’URL base delle immagini di TMDB:
https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare
(troviamo tutte le dimensioni possibili a questo link:
https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) per poi aggiungere la
parte finale dell’URL passata dall’API.
Esempio di URL:
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png */


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
        }
    }
});