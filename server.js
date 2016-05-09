//my components
const config = require('./src/_config.js');
const feed = require('./src/feed.js');
const storage = require('./src/storage.js');

//Express
const express = require('express');
const app = express();

//Lodash
const _ = require('lodash-node');;

//json output
app.get('/json', function (req, res) {
    storage.loadItems(function (items) {
        res.type('application/json');
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.send(JSON.stringify(items));
    });
});

// //RSS output
// app.get('/rss', function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.send('json');
// });

//js snippet code
app.get('/snippet.js', function (req, res) {
    res.sendfile(__dirname + '/snippet.js');
});

//status page
app.get('/', function (req, res) {
    //Webpages
    const www_page = require('./src/www/_page.js');
    const www_nav = require('./src/www/nav.js');
    const www_state = require('./src/www/state.js');
    const www_config = require('./src/www/config.js');
    const www_items = require('./src/www/items.js');

    var active = req.query.active || "";

    var content = _.template(www_nav.template)({ active: active })

    if (active === "config") {
        content += _.template(www_config.template)({ active: active })
    } else if (active === "items") {
        content += _.template(www_items.template)({ active: active })
    } else {
        content += _.template(www_state.template)({ active: active })
    }

    res.send(_.template(www_page.template)({ content: content }));
});

//404
app.get('*', function (req, res) {
    res.send('404 - not found', 404);
});

app.listen(3000);

// feed.fetch(function (item) {
//     storage.saveItem({
//         title: item.title,
//         date: item.date,
//         description: item.description,
//         link: item.link
//     })
// });
