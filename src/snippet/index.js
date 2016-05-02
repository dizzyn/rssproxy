import React from 'react'
import ReactDOM from 'react-dom'

import List from './List'

document.write(`<style>
                    .Srss-snippet li {clear: left}
                    .Srss-snippet li p {display: inline}
                    .Srss-snippet li img {float: left}
                </style>`);
document.write("<div class='rss-snippet'></div>");

ReactDOM.render(
    <div>    
        <List/>
    </div>,
    document.getElementsByClassName("rss-snippet")[0]
);