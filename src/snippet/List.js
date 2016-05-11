import React from 'react'

import Item from './Item'

export default class List extends React.Component {

    parseRSSDesc(description) {
        var imgSrc = description.substring(description.indexOf("src=") + 5);
        imgSrc = imgSrc.substring(0, imgSrc.indexOf("\""));

        return {
            text: description.replace(/<\/?[^>]+(>|$)/g, ""),
            img: imgSrc
        }
    }

    httpGet(url, success, error) {

        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Success
                success(this.response);
            }
        }
        request.onerror = function () {
            error(new Error('XMLHttpRequest Error: ' + this.statusText));
        };

        var attrs = [];

        if (this.props.maxCount) {
          attrs.push("count=" + this.props.maxCount);
        }

        if (this.props.filter) {
          attrs.push("filter=" + encodeURIComponent(this.props.filter));
        }

        for (var i = 0; i < attrs.length; i++) {
            url += (i === 0 ? "?" : "&") + attrs[i];
        }

        request.open('GET', url);
        request.send();
    }

    componentWillMount() {

        this.httpGet('http://snippet.svatba-v-zahranici.eu/json', (value) => {

            this.setState({
                items: JSON.parse(value)
            });
        }, (reason) => {
            console.error('Something went wrong', reason);
        });
    }

    render() {
        var columnCount = this.props.columnCount;

        if (!this.state || !this.state.items) {
            return (
                <div></div>
            );
        } else {
            var cols = [];

            for (var i = 0; i < this.state.items.length; i++) {
                const item = this.state.items[i];

                item.text = this.parseRSSDesc(item.description).text;
                item.img = this.parseRSSDesc(item.description).img;

                if (!cols[i % columnCount]) {
                  cols[i % columnCount] = [];
                }

                cols[i % columnCount].push(<Item key={"x" + i} item={item}/>);
            }

            var colSet = [];
            for (var i = 0; i < cols.length; i++) {
                colSet.push(
                  <ul key={"y" + i} style={{ margin: 0, padding: 0, float: "left", maxWidth: "500px", width: (100 / columnCount) + "%" }}>
                      {cols[i]}
                  </ul>
                )
            }

            return (
                <div className="rssItems" style={{ margin: 0, padding: 0, maxWidth: "1000px" }}>
                    {colSet}
                </div>
            );
        }
    }
}
