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
        this.tap_list = this.tap_list.bind(this);

}
    tap(){
      // console.log("123", this.props.history);
      // window.location.href = '/index-details-type'
      this.props.history.push("/index-details-type")
        // console.log(this.props.history);
    }
    tap_list(){
        this.props.history.push("/list")
    }
    render() {
        return (
            <div className="typeName">
                <div onClick={this.tap}>
                    <img src={[require("../static/image/type.jpg")]} alt=""/>
                    <p>悬疑</p>
                </div>
                <div  onClick={this.tap_list}>
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
