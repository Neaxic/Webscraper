//https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/

const rp = require('request-promise');
const $ = require('cheerio');


// function PotusParse(url) {
//     let retVal = {
//         name = 'test',
//         birthday = 'kdkdk',
//     }

//     return retVal
// }


function potusParse(url) {
    return rp(url)
        .then(function (html) {
            //console.log(html);
            return {
            name: ($('#firstHeading', html).text()),
            birth: ($('.bday', html).text())
            };
        })
        .catch(function (err) {
            console.log('Error: ', err)
        })
}

module.exports = potusParse;