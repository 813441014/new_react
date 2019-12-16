import React, {Component} from 'react';
import { withRouter } from 'react-router'
require("./type.css")
class Type extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index : props.index,
        };
        this.tap = this.tap.bind(this);//手动绑定

}
    tap(){
      // console.log("123", this.props.history);
      // window.location.href = '/index-details-type'
      this.props.history.push("/index-details-type")
        // console.log(this.props.history);
    }
    render() {
        return (
            <div className="typeName">
                <div onClick={this.tap}>
                    <img src={[require("../static/image/type.jpg")]} alt=""/>
                    <p>悬疑</p>
                </div>
                <div>
                    <img src={[require("../static/image/type.jpg")]} alt=""/>
                    <p>悬疑</p>
                </div>
                <div>
                    <img src={[require("../static/image/type.jpg")]} alt=""/>
                    <p>悬疑</p>
                </div>
                <div>
                    <img src={[require("../static/image/type.jpg")]} alt=""/>
                    <p>悬疑</p>
                </div>
                    <div>
                        <img src={[require("../static/image/type.jpg")]} alt=""/>
                        <p>悬疑</p>
                    </div>
                    <div>
                        <img src={[require("../static/image/type.jpg")]} alt=""/>
                        <p>悬疑</p>
                    </div>
                    <div>
                        <img src={[require("../static/image/type.jpg")]} alt=""/>
                        <p>悬疑</p>
                    </div>
                    <div>
                        <img src={[require("../static/image/type.jpg")]} alt=""/>
                        <p>悬疑</p>
                    </div>
            </div>
        );
    }
}

export default withRouter(Type);
