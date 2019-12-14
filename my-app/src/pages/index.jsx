import React, {Component} from 'react';
import Banner from './banner.jsx'
import List from './list.jsx'
import Type from './type.jsx'
require("./index.css")
class Index extends Component {
    render() {
        return (
            <div className="contaniner">
                <Banner></Banner>
                <Type></Type>
                <List history={111111}></List>
                <div>
                    sdggds
                </div>
            </div>
        );
    }
}

export default Index;
