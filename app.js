//my components
const config = require('./src/_config.js');
const feed = require('./src/feed.js');
const storage = require('./src/storage.js');
const sysInfo = require('./src/www/sys-info');

//Express
const express = require('express');
const app = express();

//Lodash
const _ = require('lodash-node');;

//json output
app.get('/json', function (req, res) {
    storage.loadItems(function (items) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(items));
    }, req.query.maxcount || 20, req.query.filter);
});

//js snippet code
app.get('/snippet.js', function (req, res) {
    res.sendfile(__dirname + '/snippet.js');
});

//js snippet code
app.get('/info', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache, no-store');
    res.end(JSON.stringify({
        gen: sysInfo.gen(),
        poll: sysInfo.poll()
    }));
});

//status page
app.get('/', function (req, res) {
    //Webpages
    const www_page = require('./src/www/_page.js');
    const www_config = require('./src/www/config.js');

    var active = req.query.active || "";

    var content = "";// _.template(www_nav.template)({ active: active })

    // if (active === "config") {
        content += _.template(www_config.template)({ active: active, words: req.query.words || "", NODE_ENV: process.env.NODE_ENV })
    // } else if (active === "items") {
    //     content += _.template(www_items.template)({ active: active })
    // } else {
    //     content += _.template(www_state.template)({ active: active })
    // }

    res.send(_.template(www_page.template)({ content: content }));
});

//404
app.get('*', function (req, res) {
    res.send('404 - not found', 404);
});

//
// konfigurace weboveho serveru
//
var addr = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 8000;

//
// Start weboveho serveru
//
app.listen(port, addr, function () {
    console.log('The app listening at http://%s:%s', addr, port, `Application worker ${process.pid} started...`);
});
