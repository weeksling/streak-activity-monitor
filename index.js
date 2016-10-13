// Require all dependencies at start
var request = require('request');
require('dotenv').config();
var geckoboard = require('geckoboard');


// Defining constants
const STREAK_BASE_URL = "https://www.streak.com/api/v1/";
const STREAK_API_KEY  = process.env.STREAK_API_KEY;
const SALES_PIPELINE_ID='agxzfm1haWxmb29nYWVyOgsSDE9yZ2FuaXphdGlvbiITd2Vla3NsaW5nQGdtYWlsLmNvbQwLEghXb3JrZmxvdxiAgICAgOSRCgw';

const GECKO_BASE_URL= 'https://api.geckoboard.com/';
const GECKO_API_KEY = process.env.GECKO_API_KEY;

var gb = geckoboard(GECKO_API_KEY);

fetchData();





function fetchData () {
	console.log('fetching data from Streak API');
	request.get(STREAK_BASE_URL+'pipelines/'+SALES_PIPELINE_ID+'/boxes', {
		auth: {
			user: STREAK_API_KEY
		}
	}, function (err, response, data) {
		if (err)
			console.error(err)
		else {
			sendData(JSON.parse(data));
		}
	})
}

function sendData(data) {
	console.log('sending data to GeckoBoxes');
	var formatted = data.map(formatToSchema);
	gb.datasets.findOrCreate({
		id: 'streak.sales.boxes',
		fields: {
			'emails.total': {type:'number', name: 'totalNumberOfEmails'},
			'emails.sent': {type: 'number', name: 'totalNumberOfSentEmails'},
			'emails.received': {type: 'number', name: 'totalNumberOfReceivedEmails'},
			name: {type:'string', name:'name'},
			created: {type: 'datetime', name:'creationTimestamp'},
			updated: {type: 'datetime', name: 'lastUpdatedTimestamp'}
		}
	}, function (err, dataset) {
		if (err){
			console.error(err);
		} else {
			//console.log(dataset)
			dataset.put(formatted, function (err, res) {
				if (err)
					console.error('putting dataset', err);
				else
					console.log(res);
			});
		}
	})
}

function formatToSchema (data) {
	return {
		'emails.total': data.totalNumberOfEmails,
		'emails.sent': data.totalNumberOfSentEmails,
		'emails.received': data.totalNumberOfReceivedEmails,
		name: data.name,
		created: new Date(data.creationTimestamp),
		updated: new Date(data.lastUpdatedTimestamp)
	}
}
