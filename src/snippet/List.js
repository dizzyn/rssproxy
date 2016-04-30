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
            error(new Error(
                'XMLHttpRequest Error: ' + this.statusText));
        };
        request.open('GET', url);
        request.send();
    }
    
    componentWillMount() {
                
        this.httpGet('json', (value) => {

            this.setState({
                items: JSON.parse(value)
            });
        }, (reason) => {
            console.error('Something went wrong', reason);
        });
    }

    render() {

        if (!this.state || !this.state.items) {
            return (
                <div>
                    <h1>No items</h1>
                </div>
            );
        } else {
            var itemComps = [];
            for (var i = 0; i < this.state.items.length; i++) {
                const item = this.state.items[i];
                
                item.text = this.parseRSSDesc(item.description).text;
                item.img = this.parseRSSDesc(item.description).img;
                
                itemComps.push(<Item key={"x" + i} item={item}/>);
            }

            return (
                <ul className="rssItems" style={{margin:0, padding: 0, maxWidth: "500px"}}>
                    {itemComps}
                </ul>
            );
        }
    }
}
