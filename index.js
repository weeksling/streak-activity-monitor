// Require all dependencies at start
var request = require('request');
require('dotenv').config();

// Defining constants
const STREAK_BASE_URL = "https://www.streak.com/api/v1/";
const STREAK_API_KEY  = process.env.STREAK_API_KEY;
const SALES_PIPELINE_ID='agxzfm1haWxmb29nYWVyOgsSDE9yZ2FuaXphdGlvbiITd2Vla3NsaW5nQGdtYWlsLmNvbQwLEghXb3JrZmxvdxiAgICAgOSRCgw';


fetchData();





function fetchData () {
	var boxes = [];
	console.log('fetching data from Streak API');
	request.get(STREAK_BASE_URL+'pipelines/'+SALES_PIPELINE_ID+'/boxes', {
		auth: {
			user: STREAK_API_KEY
		}
	}, function (err, response, data) {
		if (err)
			console.error(err)
		else {
			console.log(response.statusCode)
			console.log(data)
			boxes = data;


		}
	})
}