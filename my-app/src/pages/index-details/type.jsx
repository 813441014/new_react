import React, {Component} from 'react';
require("./type.css")
class Type extends Component {
    constructor(props){
        super(props);
        this.state ={
            index:0
        }
    }
   tap(){

   }
    render() {
        return (
            <div>
                <div className="scrollView">
                    <div className="overView">
                        <p className={this.state.index == 0?"active":''} data-index="0" onClick={this.tap}>
                            全部
                        </p>
                        <p  className={this.state.index == 0?"active":''} data-index="0" >休闲</p>
                        <p>运动</p>
                        <p>悬疑</p>
                        <p>修仙</p>
                        <p>恐怖</p>
                        <p>搞笑</p>
                        <p>之前</p>
                        <p>之前</p>
                        <p>之前</p>
                        <p>之前</p>
                        <p>之前</p>
                        <p>之前</p>
                        <p>之前</p>
                        <p>之前</p>
                        <p>之前</p>
                    </div>




                </div>
            </div>
        );
    }
}

export default Type;
