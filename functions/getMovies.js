const puppeteer = require("puppeteer");
const $ = require("cheerio");
const Movie = require('../classes/Movie');

const buttonQuery = "button.load-more";
const movieQuery = "div.featureFilm"
let page;
let browser;
async function init() {
  browser = await puppeteer.launch()
  page = await browser.newPage();
  console.log('page is opened...');
}
init();
async function getComments(url) {
  console.log("goto:", url);
  await page.goto(url);
  try {

    while (1) {
      if ((await page.$(buttonQuery)) !== null) {
        await page.click(buttonQuery);
      } else break;
    }
  } catch (err) {
    console.log(err);
  }
  let html = await page.content();
  let movieItems = $(movieQuery, html);
  for (let i = 0; i < movieItems.length; i++) {
    new Movie(movieItems[i]);
  }
  let res = Movie.getMovies();
  Movie.reset();
  return res;
}
module.exports = getComments;