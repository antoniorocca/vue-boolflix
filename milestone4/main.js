/* Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp,
creando un layout completo simil-Netflix:
● Un header che contiene logo e search bar
● Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma
di “card” in cui lo sfondo è rappresentato dall’immagine di copertina (consiglio
la poster_path con w342)
● Andando con il mouse sopra una card (on hover), appaiono le informazioni
aggiuntive già prese nei punti precedenti più la overview */


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