import React, {Component} from 'react';
import Router from './router/router'
import AllRouter from './router/all-router'

import NavBottom from './pages/nav-bottom.jsx'
import Index from './pages/index.jsx'
import {Redirect, Route} from "react-router";
// import Person from './pages/person.jsx'
// import App from './pages/main.jsx'
// import { render } from 'react-dom'
// import { Router, Route} from 'react-router'
//
// React.render((
//     <Router>
//         <Route path="/" component={App}>
//             <Route path="index" component={Index} />
//             <Route path="person" component={Person} />
//         </Route>
//     </Router>
// ), document.body)

function Welcome(props){
 return <h1>Hello,{props.name}</h1>
}

function handleClick(){
console.log("hh")
}


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: []
        };

    //    this.setState({
        //         comments: response.comments
        //       });
    }
    render() {
        return (
            < div >
                {/*<Welcome name="shuiya "></Welcome>*/}
                {/*<Index></Index>*/}
                {/*<NavBottom/>*/}
                <Router></Router>
            < /div>


            )
    }
}

export default App;
