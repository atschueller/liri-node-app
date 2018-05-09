require("dotenv").config();
var keys = require('keys.js');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var request = process.argv[2];
var userSearch = process.argv[3];

function spotifyThisSong(userSearch) {
  spotify.search({ type: 'track', query: userSearch }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log(data.artist);
    console.log(data.track);
    console.log(data.album);
  });
};
function myTweets(userSearch) {
  client.get('search/tweets', { q: 'node.js', count: 20 }, function (tweets, response) {
    var tweetsFound = tweets[i];
    for (var i = 0; i < tweetsFound.length; i++) {
      console.log(tweetsFound);
      JSON.parse(tweetsFound);
    };
  });
};





