'use strict';
// const corpus = require('/home/spencer/mountain/nlp/corpus/index.js');
const corpus = require('nlp-corpus');
const nlp = require('../../../src/index.js');

const spot_test = function() {
  // const str = corpus.text.fiction();
  const str = corpus.text.friends();
  var text = nlp.text(str);
  var topics = text.topics();
  console.log(topics.slice(0, 100));
  return;
};

module.exports = spot_test;
spot_test();
