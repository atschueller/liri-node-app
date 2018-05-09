require("dotenv").config();
var keys = require('keys.js');
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var userRequest = process.argv[2];
var userSearch = process.argv[3];

function spotifyThis() {
spotify.search({ type: 'track', query: userSearch}, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 console.log(data.artist);
 console.log(data.track);
 console.log(data.album); 
});
};
var client = new Twitter(keys.twitter);




