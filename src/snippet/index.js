import React from 'react'
import ReactDOM from 'react-dom'

import List from './List'

document.write("<div class='rss-snippet'></div>");

var columnCount = columnCount || 2;

ReactDOM.render(
    <div>
        <List columnCount={columnCount}/>
    </div>,
    document.getElementsByClassName("rss-snippet")[0]
);
