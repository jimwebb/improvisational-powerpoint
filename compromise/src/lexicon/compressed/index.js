//directory of files to pack with `node scripts/pack.js`
//they are stored in compressed form in ../_packed
var lex = {};

//add-in the generic, flat word-lists
var data = [
  //nouns
  [require('./data/nouns/singulars'), 'Singular'],
  [require('./data/nouns/professions'), 'Noun'],
  [require('./data/nouns/sportsTeams'), 'SportsTeam'],
  [require('./data/nouns/uncountables'), 'Uncountable'],
  [require('./data/nouns/pronouns'), 'Pronoun'],
  [require('./data/nouns/organizations'), 'Organization'],
  [require('./data/nouns/demonyms'), 'Demonym'],
  [require('./data/possessives'), 'Possessive'], //+pronoun?
  [require('./data/currencies'), 'Currency'],
  [require('./data/units'), 'Unit'],

  [require('./data/places/countries'), 'Country'],
  [require('./data/places/regions'), 'Region'],
  [require('./data/places/places'), 'Place'],
  [require('./data/places/cities'), 'City'],
  //dates
  [require('./data/dates/days'), 'WeekDay'],
  [require('./data/dates/holidays'), 'Holiday'],
  [require('./data/dates/months'), 'Month'],
  [require('./data/dates/durations'), 'Duration'],
  [require('./data/dates/times'), 'Time'],
  //people
  [require('./data/people/firstnames'), 'FirstName'],
  [require('./data/people/lastnames'), 'LastName'],
  [require('./data/people/maleNames'), 'MaleName'],
  [require('./data/people/femaleNames'), 'FemaleName'],
  [require('./data/people/honorifics'), 'Honorific'],
  [require('./data/people/people'), 'Person'],
  //verbs
  [require('./data/verbs/infinitives'), 'Infinitive'],
  [require('./data/verbs/verbs'), 'Verb'],
  [require('./data/verbs/phrasals'), 'PhrasalVerb'],
  [require('./data/verbs/modals'), 'Modal'],
  //adjectives
  [require('./data/adjectives/adjectives'), 'Adjective'],
  [require('./data/adjectives/comparables'), 'Comparable'],
  [require('./data/adverbs'), 'Adverb'],
  //misc
  [require('./data/expressions'), 'Expression'],
  [require('./data/prepositions'), 'Preposition'],
  [require('./data/determiners'), 'Determiner'],
  [require('./data/conjunctions'), 'Conjunction']
];
for (var i = 0; i < data.length; i++) {
  var list = data[i][0];
  for (var o = 0; o < list.length; o++) {
    //log duplicates
    // if (lex[list[o]]) {
    //   console.log(list[o] + '  ' + lex[list[o]] + ' ' + data[i][1]);
    // }
    lex[list[o]] = data[i][1];
  }
}

//conjugate, inflect, derive forms
// lex = preBuild(lex);

module.exports = lex;
// console.log(Object.keys(lex).length);
// console.log(lex['early']);
