RSS proxy + Snippet  
===================

### How does it work?
- It fetches once per hour the RSS feed and cache all the news items
- Provides a snippet.js code that can embed a filtered newsfeed into a page

## WWW Interfaces:
- **/json** - the same in JSON (params: *count* - max count of items, *filter* - words to be searched (separated by ','))
- **/snippet.js** - The snippet code bundle
- **/** - public info console

## CMD interfaces:
- **npm start** - run a webserver
- **npm run devserver** run a webpack devserver for the snippet.js
- **npm run build** build a snippet.js bundle

### Target platform
- The system is ready to be deployed into an openshift container - runs at [snippet.svatba-v-zahranici.eu](http://snippet.svatba-v-zahranici.eu)
