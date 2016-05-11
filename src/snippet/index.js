import React from 'react'
import ReactDOM from 'react-dom'

import List from './List'

document.write("<div class='rss-snippet'></div>");
//List columnCount={cCount || columnCount} maxCount={mCount || maxCount} filter={flt || filter}/>

// if (typeof columnCount === 'undefined') {
//   var cCount = 2;
// }
//
// if (typeof filter === 'undefined') {
//   var flt = void 0;
// }
//
// if (typeof maxCount === 'undefined') {
//   var mCount = 20;
// }


//
ReactDOM.render(
    <div>
        <List columnCount={window['columnCount'] || 2} maxCount={window['maxCount'] || 20} filter={window['filter']}/>
    </div>,
    document.getElementsByClassName("rss-snippet")[0]
);
