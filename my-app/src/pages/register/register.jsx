import React, {Component} from 'react';
import axios from "axios";
import qs from "qs";
require("./register.css")
class Register extends Component {
    constructor(props){
        super(props)
    }
    register(){
        axios.get("http://localhost:3000/list.json",
            qs.stringify({name:"weizhi"})
        ).then(function (response) {

        })
    }
    render() {
        return (
            <div className={"register"}>
                <div className={"title"}>注册</div>
                <div className={"registerBox"}>
                    <p>昵称</p>
                    <div>
                        <input type="text" placeholder={"请输入姓名"}/>
                    </div>
                </div>
                <div className={"registerBox"}>
                    <p>手机号</p>
                    <div>
                        <input type="text" placeholder={"请输入手机号"}/>
                    </div>
                </div>
                <div className={"registerBox"}>
                    <p>密码</p>
                    <div>
                        <input type="text" placeholder={"请输入密码"}/>
                    </div>
                </div>
                <div className={"registerBox"}>
                    <p>确认密码</p>
                    <div>
                        <input type="text" placeholder={"请输入确认密码"}/>
                    </div>
                </div>
                <div className={"loginBtn"} onClick={this.register}>确定</div>
            </div>
        );
    }
}

export default Register;
