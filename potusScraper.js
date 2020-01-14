const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
const $ = require('cheerio');

const content = [];


rp(url)
    .then(function(html){
        //console.log(html);
        console.log($('big > a', html).length);
        for(let i = 0; i < 45; i++){
            content.push($('big > a', html) [i].attribs.href);
        }

        console.log(content);
    })
    .catch(function(err){
    });



//console.log('hi')