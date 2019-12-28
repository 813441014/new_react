import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import qs from "qs";
import store from "../../store";
require("./add.css")
class Add extends Component {
    constructor(props){
        super(props)
        this.state ={
            nickName:"",
            nickAge:"",
            nickAdddress:"",
            nickCity:"",
            nickDetails:"",
            nickImg:[]
        }
        this.nameVal = this.nameVal.bind(this);
        this.ageVal =this.ageVal.bind(this);
        this.cityVal = this.cityVal.bind(this);
        this.detailsVal = this.detailsVal.bind(this);
        this.addressVal = this.addressVal.bind(this);
        this.fileVal = this.fileVal.bind(this)
    }
    nameVal(e){
        this.setState({
            nickName:e.target.value
        })
    }
    ageVal(e){
        this.setState({
            nickAge:e.target.value
        })
    }
    cityVal(e){
        this.setState({
            nickCity:e.target.value
        })
    }
    detailsVal(e){
        this.setState({
            nickDetails:e.target.value
        })
    }

    addressVal(e){
        this.setState({
            nickAdddress:e.target.value
        })
    }
    fileVal(e){
        console.log(e);
        console.log(e.target.files);
        this.upload(e.target.files[0])
    }

    upload(e){
        var _self = this;
        const param = new FormData();
        param.append("file", e);
        axios.post("http://localhost:3006/upload",
            param,
            {headers:{ "Content-Type": "multipart/form-data" }
        }).then(function (response) {
            if(response.data.length > 0){
                localStorage.setItem("name",_self.state.name);
                localStorage.setItem("pass",_self.state.pass);
                const name = {
                    type:"name",
                    value:_self.state.name
                }
                const pass = {
                    type:"pass",
                    value:_self.state.pass
                }
                store.dispatch(name); // 解析action
                store.dispatch(pass); // 解析action
                _self.props.history.push("/index")
            }

        })
    }

    render() {
        const  img_list =  this.state.nickImg.map((item,index) =>
            <div className={"items_img"}>
                <img src={item} alt=""/>
            </div>
        );
        return (
            <div className={"form_div"}>
                <div className={"label_div"}>
                    <p>昵称：</p>
                    <div>
                        <input type="text" placeholder={"请输入"} defaultValue={this.state.nickName} onChange={this.nameVal}/>
                    </div>
                </div>
                <div className={"label_div"}>
                    <p>年龄：</p>
                    <div>
                        <input type="number" placeholder={"请输入"} defaultValue={this.state.nickAge} onChange={this.ageVal}/>
                    </div>
                </div>
                <div className={"label_div"}>
                    <p>地区：</p>
                    <div>
                        <input type="number" placeholder={"请输入"} defaultValue={this.state.nickCity} onChange={this.cityVal}/>
                    </div>
                </div>
                <div className={"label_div"}>
                    <p>详细地址：</p>
                    <div>
                        <input type="number" placeholder={"请输入"} defaultValue={this.state.nickAdddress} onChange={this.addressVal}/>
                    </div>
                </div>
                <div className={"label_div"}>
                    <p>座右铭：</p>
                    <div>
                        <input type="number" placeholder={"请输入"} defaultValue={this.state.nickDetails} onChange={this.detailsVal}/>
                    </div>
                </div>
                <div className={"image_url"}>
                    <p>上传图片</p>
                    <div className={"image_url"}>

                        {img_list}

                        <div className={"items_img"}>
                            <input type="file" onChange={this.fileVal} />
                            <div className={"add_file"}>
                                <i className="iconfont icon-add"></i>
                            </div>

                        </div>


                    </div>
                </div>
                <div className={"fixed_abo"}>
                    <p>添加</p>
                </div>
            </div>
        );
    }
}

export default Add;