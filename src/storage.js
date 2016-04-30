/**
 * This module handles items stored 
 */

const config = require('./_config.js');
const fs = require('fs');

// create a stdout and file logger
var log = require('simple-node-logger').createSimpleLogger('log-storage.log');


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

    fs.writeFile("content/" + dateToTimestamp(item.date) + ".json", JSON.stringify(item), 'utf8', (error) => {

        if (error) {
            console.log(error)
            log.error('Write ERROR:', error, ' / ', new Date().toJSON());
        }
    });
}

/**
 * Load items 
 */
exports.loadItems = function (callback) {

    fs.readdir("content/", function (error, files) {
        
        if (error) {
            console.log(error)
            log.error('Read ERROR:', error, ' / ', new Date().toJSON());
        }

        var items = files.sort().map(function (item, id) {
            return JSON.parse(fs.readFileSync("content/" + item, "utf8"))
        });

        callback(items);

    });

}