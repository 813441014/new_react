import React, {Component} from 'react';
import {Link} from 'react-router-dom'
require("./list.css")
class List extends Component {
    constructor(props,context) {
        super(props,context);
        console.log(context);
        console.log(props.history)
        this.liTap = this.liTap.bind(this);//手动绑定
    }
    liTap(){
       console.log("11")
        // this.props.history.push("/index-details")
        // this.context.router.history.push("/index-details")
    }
    render() {
        return (
                <ul className="ulist">
                    <li className="uli">
                        <Link to="/index-details">
                            <img src={[require("../static/image/image.jpg")]} alt=""/>
                        </Link>
                            <div className="content">
                                <p className="title">标题标题标题标题标题标题标题标题标题标题</p>
                                <p className="desc">描述标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</p>
                            </div>


                    </li>
                    <li className="uli">
                        <img src={[require("../static/image/image.jpg")]} alt=""/>
                        <div className="content">
                            <p className="title">标题标题标题标题标题标题标题标题标题标题</p>
                            <p className="desc">描述标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</p>
                        </div>
                    </li>
                    <li className="uli">
                        <img src={[require("../static/image/image.jpg")]} alt=""/>
                        <div className="content">
                            <p className="title">标题标题标题标题标题标题标题标题标题标题</p>
                            <p className="desc">描述标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</p>
                        </div>
                    </li>
                    <li className="uli">
                        <img src={[require("../static/image/image.jpg")]} alt=""/>
                        <div className="content">
                            <p className="title">标题标题标题标题标题标题标题标题标题标题</p>
                            <p className="desc">描述标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</p>
                        </div>
                    </li>
                </ul>
        );
    }
}

export default List;
