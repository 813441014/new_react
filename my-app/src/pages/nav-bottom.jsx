import React, {Component} from 'react'
import { Link } from 'react-router-dom'
require("./nav-bottom.css")


class NavBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
           index : props.index,
        };
        this.handleTap = this.handleTap.bind(this);//手动绑定
        console.log(this.state)
    }
    componentDidMount() {
        console.log("方法会在组件已经被渲染到 DOM 中后运行")
    }
    componentWillUnmount() {
        console.log("组件卸载")
    }
    // shouldComponentUpdate(){
    //
    // }
    handleTap(e){
        console.log(e.target.dataset.index);
        this.setState({
            index:e.target.dataset.index
        });
    }
    render() {
        return (
            <div className="nav">
                 <div data-index="0" onClick={this.handleTap} className={this.state.index === "0"?'active':''}>
                     <Link to="/index">
                         <i className="iconfont icon-shouye1"></i>
                         <p>首页</p></Link>
                 </div>

                <div className="posiDiv">
                    <Link to="/add">
                        <i className="iconfont icon-add"></i>
                    </Link>
                </div>

                <div data-index="1" onClick={this.handleTap} className={this.state.index === "1"?'active':''}>
                    <Link to="/person">
                        <i className="iconfont icon-wode1"></i>
                        <p>个人中心</p></Link>
                </div>
            </div>
        );
    }
}

export default NavBottom;
