RSS filter + Snippet  
====================

### How does it work?

- The **feedFetch.js** module fetchs a single RSS feed once per a time interval and store the news items into a folder.
- The **server.js** reads the items from the folder and produces:
  - **/rss** - alternate RSS chanel with a two GET params - count and keywords
  - **/json** - the same in JSON
  - **/** - public info console
  - **snippet.js** - a embed code JS code 

### Target platform
- The system is ready to be deployed into a openshift container


