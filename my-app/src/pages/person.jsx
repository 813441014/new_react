import React, {Component} from 'react';
import Navor from "./navor.jsx";
import NavBottom from "./nav-bottom";
require("./person.css");
class Person extends Component {
    render() {
        return (
            <div className="container">
                <Navor></Navor>
                <div className="personUli">
                    <ul>
                        <li>
                            <i className="iconfont icon-tongzhi"></i>
                            <span>个人中心</span></li>
                        <li>
                            <i className="iconfont icon-fabu2"></i>

                            <span>我的关注</span></li>
                        <li>
                            <i className="iconfont icon-shoucang1"></i>

                            <span>我的收藏</span></li>
                        <li>
                            <i className="iconfont icon-tuichu"></i>

                            <span>我的收藏</span></li>

                    </ul>
                </div>
                <NavBottom index="1"></NavBottom>
            </div>
        );
    }
}

export default Person;
