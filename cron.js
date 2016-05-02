//const path = require('path')

//my components
const config = require('./src/_config.js');
const feed = require('./src/feed.js');
const storage = require('./src/storage.js');

feed.fetch(function (item) {
    storage.saveItem({
        title: item.title,
        date: item.date,
        description: item.description,
        link: item.link
    })
});