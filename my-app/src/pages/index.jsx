import React, {Component} from 'react';
import Banner from './banner.jsx'
import List from './list.jsx'
import Type from './type.jsx'
import NavBottom from './nav-bottom.jsx'
import store from '../store/index.js'; // './store/index.js'的简写
require("./index.css")
class Index extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        console.log(this.state)
    }
    render() {
        return (
            <div className="contaniner">
                <Banner></Banner>
                <Type></Type>
                <List history={111111}></List>
                <NavBottom index="0"></NavBottom>

            </div>
        );
    }
}

export default Index;
