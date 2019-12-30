import React, {Component} from 'react';
import axios from "axios";

import ReactPullLoad,{STATS} from 'react-pullload';
import "react-pullload/dist/ReactPullLoad.css"
const loadMoreLimitNum  = 1;
const cData = [
    "http://img1.gtimg.com/15/1580/158031/15803178_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803179_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803181_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803182_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803183_1200x1000_0.jpg",
    // "http://img1.gtimg.com/15/1580/158031/15803184_1200x1000_0.jpg",
    // "http://img1.gtimg.com/15/1580/158031/15803186_1200x1000_0.jpg"
]
require("./list.css")
class List extends Component {
    constructor(props){
       super(props);
       this.state = {
           hasMore: true,
           data: [],
           action: STATS.init,
           index: loadMoreLimitNum ,//loading more test time limit
           list:[
                    "sdhjfkhsdjk"
           ]
       }
    }
    componentDidMount() {
        var _this = this;
        axios.get("http://localhost:3006/json").then(function (response) {
            _this.setState({
                list: _this.state.list.concat(response.data)
            })
        })
    }
    handleAction = (action) => {
        console.info(action, this.state.action,action === this.state.action);
        //new action must do not equel to old action
        if(action === this.state.action ||
            action === STATS.refreshing && this.state.action === STATS.loading ||
            action === STATS.loading && this.state.action === STATS.refreshing){
            // console.info("It's same action or on loading or on refreshing ",action, this.state.action,action === this.state.action);
            return false
        }

        if(action === STATS.refreshing){//刷新
            setTimeout(()=>{
                //refreshing complete
                this.setState({
                    list: cData ,
                    hasMore: true,
                    action: STATS.refreshed,
                    index: loadMoreLimitNum
                });
            }, 3000)
        } else if(action === STATS.loading){//加载更多
            this.setState({
                hasMore: true
            });
            setTimeout(()=>{
                if(this.state.index === 0){
                    this.setState({
                        action: STATS.reset,
                        hasMore: false
                    });
                } else{
                    this.setState({
                        list: [...this.state.list, cData[0], cData[0]],
                        action: STATS.reset,
                        index: this.state.index - 1
                    });
                }
            }, 3000)
        }

        //DO NOT modify below code
        this.setState({
            action: action
        })
    }

    getScrollTop = ()=>{
        if(this.refs.reactpullload){
            console.info(this.refs.reactpullload.getScrollTop());
        }
    }
    setScrollTop = ()=>{
        if(this.refs.reactpullload){
            console.info(this.refs.reactpullload.setScrollTop(100));
        }
    }
    render() {
        var list =  this.state.list.map((item,index) =>
            <div className={"img_list"}>
                <p>123</p>
            </div>)
        return (
            <ReactPullLoad
                downEnough={150}
                ref="reactpullload"
                className="block"
                isBlockContainer={true}
                action={this.state.action}
                handleAction={this.handleAction}
                hasMore={this.state.hasMore}
                style={{paddingTop: 0}}
                distanceBottom={1000}>
                  <div>
                      {
                          list
                      }
                  </div>

    </ReactPullLoad>
        );
    }
}

export default List;