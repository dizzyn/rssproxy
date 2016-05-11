import React from 'react'

//

export default class Item extends React.Component {
    render() {

        var fcbLink = "https://www.facebook.com/plugins/like.php?href=" + encodeURI(this.props.item.link) + "&width=450&layout=button_count&action=recommend&show_faces=false&share=false&height=80";
        var date = new Date(this.props.item.date);
        var dateStr = (date.getDate()) + "." + (date.getMonth() + 1) + " " + date.getFullYear();

        return (<li style={{ marginTop: "15px", listStyleType: "none", padding: 0 }}>
            <a target="_blank" href={this.props.item.link}><img src={this.props.item.img} style={{ float: "left", width: "50%" }}/></a>
            <div style={{ float: "right", width: "50%" }}>
                <div style={{ paddingLeft: "15px" }}>
                    <a  target="_blank" href={this.props.item.link}>{this.props.item.title}</a>
                    <p style={{
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "11px",
                        color: "#000000",
                        marginRight: "6px"
                    }} dangerouslySetInnerHTML={{__html: this.props.item.text}}/>
                    <p style={{
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontSize: "11px",
                        color: "#808080",
                        marginBottom: "6px"
                    }}>{dateStr}</p>
                    <div>
                        <iframe src={fcbLink}
                            style={{
                                border: "none",
                                overflow: "hidden",
                                width: "100%",
                                height: "21px",
                            }}
                            width="450"
                            height="80"
                            scrolling="no"
                            frameborder="0"
                            allowTransparency="true"></iframe>
                    </div>
                </div>
            </div>
            <div style={{ clear: "both" }}></div>
        </li>);
    }
}
