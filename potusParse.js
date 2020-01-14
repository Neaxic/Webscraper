
const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/George_Washington';

rp(url)
    .then(function(html) {
        //console.log(html);
        const element = $('#firstHeading',html)
        console.log(element.text());

        const bday = ($('.bday',html).text());
        console.log(bday);
    })
    .catch(function(err) {

    })

