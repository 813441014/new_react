import React, {Component} from "react";
import { BrowserRouter as Router,Redirect, Route, Link } from "react-router-dom";
import Person from '../pages/person.jsx'
import Main from '../pages/nav-bottom.jsx'
import Index from '../pages/index.jsx'
import IndexDetails from '../pages/index-details.jsx'
require("../pages/nav-bottom.css")

// function handleTap(e){
//     console.log(e.target.dataset.index);
//     this.setState({
//         index:e.target.dataset.index
//     });
// }

class NavBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index :"0",
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
        console.log(e)
        console.log(e.target.dataset.index);
        this.setState({
            index:e.currentTarget.dataset.index
        });
    }
    render() {
        return (
                    <Router>
            {/*<div >*/}




                <Route  path="/">
                    <Redirect exact from = "/" to ="/index"/>
                    <ul className="nav">
                        <li data-index="0" onClick={this.handleTap} className={this.state.index === "0"?'active':''}>
                            <Link to="/index">首页</Link>
                        </li>
                        <li data-index="1" onClick={this.handleTap} className={this.state.index === "1"?'active':''}>
                            <Link to="/person">个人中心</Link>
                        </li>
                    </ul>
                    <Route  path="/index" component={Index} />
                    <Route path="/person" component={Person} />
                </Route>

                        <Route path="/index-details" component={IndexDetails} />




            {/*</div>*/}
        </Router>
        );
    }
}

export default NavBottom;
// function BasicExample() {
//     this.state = {
//         index : 0,
//     };
//     return (
//         <Router>
//             <div >
//
//
//                 <Route exact path="/" component={Index} />
//                 <Route path="/person" component={Person} />
//
//                 <ul className="nav">
//                     <li data-index="0" onClick={this.handleTap} className={this.state.index === "0"?'active':''}>
//                         <Link to="/">首页</Link>
//                     </li>
//                     <li data-index="1" onClick={this.handleTap} className={this.state.index === "0"?'active':''}>
//                         <Link to="/person">个人中心</Link>
//                     </li>
//                 </ul>
//
//
//             </div>
//         </Router>
//     );
// }
//
// export default BasicExample;
