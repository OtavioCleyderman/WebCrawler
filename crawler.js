const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

request('https://brickset.com/sets/year-2019', function (err, res, body) {
  if (err) {
    console.log('Erro: ' + err);
  }
  let $ = cheerio.load(body);

  $('.meta').each(function () {
    let res = [];
    let name = $(this).find('h1 > a').text().trim();
    let ratings = $(this).find('.rating').text().trim();
    let pieces = $(this).find('dd > a').text().trim();
    let price = $(this).find('a.popuplink < dd').text().trim();
    res.push(`Code and Name: ${name}`);
    res.push(`Ratings and Review: ${ratings}`);
    res.push(`Pieces: ${pieces}`);
    res.push(`Price: ${price}`);

    console.log(res);
  });
});
