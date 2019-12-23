import React, {Component} from 'react';
import { withRouter } from 'react-router'
import axios from "axios";
import qs from "qs";
require("./login.css")

console.log(withRouter)
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: localStorage.getItem("name"),
            password:localStorage.getItem("pass")
        }
        this.nameInp = this.nameInp.bind(this);//手动绑定
        this.passInp = this.passInp.bind(this);//手动绑定
        this.login = this.login.bind(this);//手动绑定
        this.loginTo = this.loginTo.bind(this);//手动绑定

    }
    nameInp(e){
        this.setState({
            name:e.target.value
        })
    }
    passInp(e){
        this.setState(({
            password:e.target.value
        }))
    }
    login(){
        console.log(this.state.name);
        var _self = this;
        axios.post("http://localhost:3006/login",
            qs.stringify({
                name:this.state.name,
                pass:this.state.password,
            })
        ).then(function (response) {
            if(response.data.length > 0){
                localStorage.setItem("name",_self.state.name);
                localStorage.setItem("pass",_self.state.password);
                _self.props.history.push("/index")
            }

        })
    }
    loginTo(){
        console.log(this.props.history)
        // this.props.history.push("/index-details-type")
        this.props.history.push("/register")
    }
    render() {
        return (
            <div className="login">
                <div className="loginName">
                    <p className="loginTitle">
                        欢迎来到注册中心
                    </p>
                    <div className="loginBox">
                        <p>账号</p>
                        <div>
                            <input type="text" placeholder="请输入账号" defaultValue={this.state.name} onChange={this.nameInp}/>
                        </div>
                    </div>
                    <div className="loginBox">
                        <p>密码</p>
                        <div>
                            <input type="password" placeholder="请输入密码" defaultValue={this.state.password} onChange={this.passInp}/>
                        </div>
                    </div>
                    <div className="loginBtn" onClick={this.login}>登录</div>
                    <div className="loginTo" onClick={this.loginTo}>去注册</div>
                </div>
            </div>
        );
    }
}

export default  withRouter(Login);
