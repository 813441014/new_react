import React, {Component} from 'react';
require("./navor.css")
class Navor extends Component {
    render() {
        return (
            <div className="navor">
                <div className="content">
                    <img src={[require("../static/image/navor.jpg")]} alt=""/>
                    <div >
                        <p>名称</p>
                        <p>超级会员</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navor;
