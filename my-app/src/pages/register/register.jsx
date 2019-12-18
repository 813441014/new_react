import React, {Component} from 'react';
import axios from "axios";
import qs from "qs";
require("./register.css")
class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            pass:"",
            phone:"",
            surepass:""
        }
        this.register = this.register.bind(this);//手动绑定
        this.nameInp = this.nameInp.bind(this);//手动绑定
        this.passInp = this.passInp.bind(this);//手动绑定
        this.phoneInp = this.phoneInp.bind(this);//手动绑定
        this.surepassInp = this.surepassInp.bind(this);//手动绑定

    }
    register(){
        if(this.state.pass != this.state.surepass){
            alert("前后不一致");
            return false
        }
        axios.post("http://localhost:3006/string",
            qs.stringify({
                name:this.state.name,
                pass:this.state.pass,
                phone:this.state.phone
            })
        ).then(function (response) {

        })
    }
    nameInp(e){
        this.setState({
            name:e.target.value
        })
    }
    passInp(e){
        this.setState({
            pass:e.target.value
        })
    }
    phoneInp(e){
        this.setState({
            phone:e.target.value
        })
    }
    surepassInp(e){
        this.setState({
            surepass:e.target.value
        })
    }
    render() {
        return (
            <div className={"register"}>
                <div className={"title"}>注册</div>
                <div className={"registerBox"}>
                    <p>昵称</p>
                    <div>
                        <input type="text" placeholder={"请输入姓名"} defaultValue={this.state.name} onChange={this.nameInp}/>
                    </div>
                </div>
                <div className={"registerBox"}>
                    <p>手机号</p>
                    <div>
                        <input type="text" placeholder={"请输入手机号"} defaultValue={this.state.phone} onChange={this.phoneInp}/>
                    </div>
                </div>
                <div className={"registerBox"}>
                    <p>密码</p>
                    <div>
                        <input type="text" placeholder={"请输入密码"} defaultValue={this.state.pass} onChange={this.passInp}/>
                    </div>
                </div>
                <div className={"registerBox"}>
                    <p>确认密码</p>
                    <div>
                        <input type="text" placeholder={"请输入确认密码"} defaultValue={this.state.surepass} onChange={this.surepassInp}/>
                    </div>
                </div>
                <div className={"loginBtn"} onClick={this.register}>确定</div>
            </div>
        );
    }
}

export default Register;
