//https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/

const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/George_Washington';


// function PotusParse(url) {
//     let retVal = {
//         name = 'test',
//         birthday = 'kdkdk',
//     }

//     return retVal
// }


function PotusParse(url) {
    return rp(url)
        .then(function (html) {
            //console.log(html);
            const name = ($('#firstHeading', html).text());
            console.log(element.text());

            const bday = ($('.bday', html).text());
            console.log(bday);

            svar = name, bday;
            return svar;
        })
        .catch(function (err) {
            console.log('Error: ', err)
        })
}

module.exports(PotusParse);