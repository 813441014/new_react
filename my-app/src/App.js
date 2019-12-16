import React, {Component} from 'react';
import RouterView from './router/router'
import AllRouter from './router/all-router'
import NavBottom from './pages/nav-bottom.jsx'
import Index from './pages/index.jsx'
import {Redirect, Route} from "react-router";
import {BrowserRouter as Router,Link} from "react-router-dom";
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
            comments: [],
            index:0
        };

    //    this.setState({
        //         comments: response.comments
        //       });
    }
    handleTap(e){
        console.log(e)
        console.log(e.target.dataset.index);
        this.setState({
            index:e.currentTarget.dataset.index
        });
    }
    render() {
        return (
            < div >
                {/*<Welcome name="shuiya "></Welcome>*/}
                {/*<Index></Index>*/}
                {/*<NavBottom/>*/}


                <RouterView></RouterView>
            < /div>


            )
    }
}

export default App;
