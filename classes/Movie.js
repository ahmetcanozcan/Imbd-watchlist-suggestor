const $ = require('cheerio');
let s_movieList = [];
let s_id = 0
module.exports = class Movie {
  constructor(html) {
    this.id = s_id;
    this.name = $(".lister-item-header a ", html).text();
    this.director = "";
    this.stars = [];
    let credits = $(".lister-item-credits a", html).each((i, elm) => {
      if (i == 0) {
        this.director = $(elm).text();
      } else {
        this.stars.push($(elm).text());
      }
    });
    this.imdb = $(".ratings-imdb-rating span", html).text();
    this.plot = $("p.plot", html).text();
    this.img = $(".lister-item-image img", html).attr('src');
    s_movieList.push(this);
    s_id++;
  }
  static getMovies() {
    return s_movieList;
  }
  static reset() {
    s_movieList = [];
    s_id = 0;
  }
}