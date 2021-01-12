/* Creare un layout base con una searchbar (una input e un button) in cui possiamo
scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il
bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni
film trovato:
1. Titolo
2. Titolo Originale
3. Lingua
4. Voto */


let app = new Vue({
    el: "#app",
    data: {
        movies: [],
        searchText: '',
    },
    methods: {
        search() {
           let text = this.searchText;
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5c6e464b752913779cebe3099e1acb27&include_adult=false&query= ${text}`)
            .then(response => {
                console.log(response.data.results);
                this.movies = response.data.results;
            })
        }
    }
});