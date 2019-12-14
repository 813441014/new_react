import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Person from '../pages/person.jsx'
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

    render() {
        return (
            <Router>
                <div >


                    <Route path="/index-details" component={IndexDetails} />



                </div>
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
