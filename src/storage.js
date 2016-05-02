/**
 * This module handles items stored 
 */
//console.log("aaaaa", __dirname)

const config = require('./_config.js');
const fs = require('fs');

// create a stdout and file logger
var log = require('simple-node-logger').createSimpleLogger(); //'log-storage.log'


/**
 * Converts RSS date format to a timestamp 
 */
var dateToTimestamp = function (date) {

    //add zeroes to the final length
    var strZeroes = function (str, minLen) {
        var len = String(str).length;
        return "0000000".substring(0, minLen - len) + str;
    }

    return String(date.getFullYear()) + strZeroes(date.getMonth(), 2) + strZeroes(date.getDate(), 2)
        + strZeroes(date.getHours(), 2) + strZeroes(date.getMinutes(), 2) + strZeroes(date.getSeconds(), 2);
}

/**
 * Save (and replace) item 
 */
exports.saveItem = function (item) {

    item.stored = new Date();

    var folder = (process.env.OPENSHIFT_DATA_DIR || "./") + "/content/"
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }

    fs.writeFile(folder + "/" + dateToTimestamp(item.date) + ".json", JSON.stringify(item), 'utf8', (error) => {

        if (error) {
            console.log(error)
            log.error('Write ERROR:', error, ' / ', new Date().toJSON());
        }
    });
}

/**
 * Compare item text contents with the filter
 * filter = Siring separed by ","  
 */
var itemMatchFilter = function (item, filter) {

    var matchStrWithArray = function (str, words) {
        var notFound = false;
        for (var i = 0; i < words.length; i++) {

            if (str.toLowerCase().indexOf(words[i]) === -1) {
                notFound = true;
                break;
            }
        }
        return !notFound;
    }

    var words = filter.trim().toLowerCase().split(",");

    return matchStrWithArray(item.title, words) || matchStrWithArray(item.description, words);
}

/**
 * Load items 
 */
exports.loadItems = function (callback, count, filter) {
    count = count || 20;

    fs.readdir("content/", function (error, files) {

        if (error) {
            console.log(error)
            log.error('Read ERROR:', error, ' / ', new Date().toJSON());
        }

        files = files.sort();
        var items = [];

        for (var i = 0; i < files.length && items.length < count; i++) {
            var file = files[i];
            var item = JSON.parse(fs.readFileSync("content/" + file, "utf8"));

            if (!filter || itemMatchFilter(item, filter)) {
                items.push(item)
            }
        };

        callback(items);
    });
}