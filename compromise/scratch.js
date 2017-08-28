'use strict';
var nlp = require('./src/index');
// nlp.verbose('tagger');
// const fresh = require('./test/unit/lib/freshPrince.js');

// var doc = nlp('Karagandy Region, Foo Province, State of Kjllekd, West Ldjec');
// doc.places().debug();

var lexicon = {
  newtownshire: 'Place',
  invernershire: 'Place',
  washingtonshire: 'Place',
  dublinshire: 'Place'
};

var pcked = nlp.pack(lexicon);
console.log(pcked);

console.log(nlp.unpack(pcked));

var doc = nlp('i lived in newtownshire', pcked);
console.log(doc.places().out());
