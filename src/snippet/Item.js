import React from 'react'

//https://developers.facebook.com/docs/plugins/like-button#settings

export default class Item extends React.Component {
    render() {
        return (<li style={{marginTop:"15px", listStyleType: "none", padding: 0}}>
            <img src={this.props.item.img} style={{float:"left", width:"50%"}}/>
            <div style={{float:"right", width:"50%"}}>
                <div style={{paddingLeft: "15px"}}>
                    <a href={this.props.item.link}>{this.props.item.title}</a>
                    <p>{this.props.item.text}</p>
                    <p>{this.props.item.date}</p>
                    <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fseznam.cz%2F&width=450&layout=standard&action=recommend&show_faces=true&share=false&height=80&appId=758523907563637" width="450" height="80" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
                </div>
            </div>
            <div style={{clear:"both"}}></div>
        </li>);
    }
}
