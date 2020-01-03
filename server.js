// to run on localhost (not needed for gh pages)
'use strict'
var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/node_modules'));

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(process.env.PORT || 3000, function(){
  console.log("SERVER listening on port", this.address().port, app.settings.env);
});

// to configure index settings
const algoliasearch = require('algoliasearch');
const instantsearch = require('instantsearch.js').default;

const records = require('./data/tedtalks.json');

const searchClient = algoliasearch('JBOP1QD3ED', '1c8efacb90b9e0d1f87ed438e2c5f324');

const index = searchClient.initIndex('tedtalks');

index.addObjects(records); //sends data to Algolia

index.setSettings({
  'searchableAttributes': [
    'speakers',
    'unordered(name)',
    'unordered(description)',
    'event_name',
    'unordered(tags)',
  ],
  'customRanking': [
    'desc(popularity_score)',
    'desc(viewed_count)',
    'desc(ingenious_rating,jaw_droping_rating)',
    'desc(informative_rating,inspiring_rating,fascinating_rating,beautiful_rating,courageous_rating,funny_rating)'
	],
	'attributesForFaceting': [
		'languages',
		'event_name'
	],
	'replicas': [
		'tedtalks_date_desc'
	]
}, (err, content) => {
  console. log(content);
})

const replica_index_date = searchClient.initIndex('tedtalks_date_desc');

replica_index_date.setSettings({
	ranking: [
		'desc(date)',
	],
	'attributesForFaceting': [
		'languages',
		'event_name'
	]
})

//to test settings
// index.search({
// 	query: 'Elizabeth Lesser',
// 	filters: 'languages:French'
// }, (err, { hits } = {}) => {
//   if (err) {
//     console.log(err);
//     console.log(err.debugData);
//     return;
//   }
//
//   // console.log(hits);
// });
