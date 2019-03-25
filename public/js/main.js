new Vue({
  el: '#app',
  data: {
    currMovie: 0,
    movies: [],
    url: '',
    isLoading: false,

  },
  methods: {
    setCurrMovie: function () {
      var length = this.movies.length;
      var index = Math.floor(Math.random() * length);
      this.currMovie = this.movies[index];
      this.isLoading = false;
    },
    getMovies: function () {
      this.isLoading = true;
      return fetch(`/api/getmovies?url=${this.url}`)
        .then(response => response.json())
        .then(json => {
          this.movies = json
          this.setCurrMovie();

        });
    }
  }
})

/**
 *  {
      name: 'Lorem Ipsum',
      director: 'Martin Scorsese',
      stars: ['lorem ipo', 'dolor sit', 'amet velis'],
      imdb: '7.5',
      plot: ' Lorem Ipsum sit dolor amet,asdasdasdasd, asdas,  asd  a wdasd',
      img: 'http://placekitten.com/150/230'
    }
 */