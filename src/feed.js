/**
 * This module fetches the feed and save it into the files 
 */

const config = require('./_config.js');

var FeedParser = require('feedparser')
var request = require('request');
var req = request(config.feedUrl)
var feedparser = new FeedParser();

// create a stdout and file logger
var log = require('simple-node-logger').createSimpleLogger('log-rss.log');

/**
 * Fetch the feed, parse it and return item by item 
 */
exports.fetch = function(callback) {
    
    req.on('error', function(error) {
        // handle any request errors
        log.error('Request ERROR:', error, ' / ', new Date().toJSON());
    });

    req.on('response', function(res) {
        var stream = this;

        if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));

        stream.pipe(feedparser);
    });

    feedparser.on('error', function(error) {
        // always handle errors
        log.error('Parse ERROR:', error, ' / ', new Date().toJSON());
    });

    feedparser.on('readable', function() {
        // This is where the action is!
        var stream = this
        var meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
        var item;

        while (item = stream.read()) {
            callback(item)
        };
    });
}