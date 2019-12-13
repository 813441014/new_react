import React, {Component} from 'react';
require("./list.css")
class List extends Component {
    render() {
        return (
                <ul className="ulist">
                    <li class="uli">
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
