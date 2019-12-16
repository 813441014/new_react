import React, {Component} from 'react';
import Navor from "./navor.jsx"
import NavBottom from "./nav-bottom";
class Person extends Component {
    render() {
        return (
            <div>
                <Navor></Navor>
                <div className="personUli">
                    <ul>
                        <li>
                            <img src={[require("../static/image/type.jpg")]} alt=""/>
                            <span>个人中心</span></li>
                        <li>
                            <img src={[require("../static/image/type.jpg")]} alt=""/>

                            <span>我的关注</span></li>
                        <li>
                            <img src={[require("../static/image/type.jpg")]} alt=""/>

                            <span>我的收藏</span></li>
                        <li>
                            <img src={[require("../static/image/type.jpg")]} alt=""/>
                            <span>个人中心</span></li>
                        <li>
                            <img src={[require("../static/image/type.jpg")]} alt=""/>

                            <span>我的关注</span></li>
                        <li>
                            <img src={[require("../static/image/type.jpg")]} alt=""/>

                            <span>我的收藏</span></li>
                        <li>
                            <img src={[require("../static/image/type.jpg")]} alt=""/>
                            <span>
                                设置
                            </span></li>
                    </ul>
                </div>
                <NavBottom index="1"></NavBottom>
            </div>
        );
    }
}

export default Person;
