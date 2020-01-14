//https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/

const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
const $ = require('cheerio');
const PotusParse = require('./potusParse');

const content = [];


rp(url)
    .then(function (html) {
        //console.log(html);
        console.log($('big > a', html).length);
        for (let i = 0; i < 45; i++) {
            content.push($('big > a', html)[i].attribs.href);
        }
        return Promise.all(
            wikiUrls.map(function (url) {
                return PotusParse('https://en.wikipedia.org' + url);
            })
        );
    })
    .then(function(presidents){
    console.log(presidents);
    })
    .catch(function (err) {
        console.log('Error: ', err)
    });


const svar = PotusParse()


//console.log('hi')