import React, {Component} from 'react';
require("./type.css")
class Type extends Component {
    constructor(props){
        super(props);
        this.state ={
            index:0
        }
        this.tap = this.tap.bind(this);//手动绑定
    }
   tap(e){
       console.log(e.target.dataset.index);
       this.setState({
           index:e.target.dataset.index
       })
   }
    render() {
        return (
            <div>
                <div className="scrollView">
                    <div className="overView">
                        <p className={this.state.index == 0?"active":''} data-index="0" onClick={this.tap}>
                            全部
                        </p>
                        <p  className={this.state.index == 1?"active":''} data-index="1" onClick={this.tap}>休闲</p>
                        <p className={this.state.index == 2?"active":''} data-index="2" onClick={this.tap}>运动</p>
                        <p className={this.state.index == 3?"active":''} data-index="3" onClick={this.tap}>悬疑</p>
                        <p className={this.state.index == 4?"active":''} data-index="4" onClick={this.tap}>修仙</p>
                        <p className={this.state.index == 5?"active":''} data-index="5" onClick={this.tap}>恐怖</p>
                        <p className={this.state.index == 6?"active":''} data-index="6" onClick={this.tap}>搞笑</p>
                        <p className={this.state.index == 7?"active":''} data-index="7" onClick={this.tap}>趣事</p>
                        <p className={this.state.index == 8?"active":''} data-index="8" onClick={this.tap}>新闻</p>
                        <p className={this.state.index == 9?"active":''} data-index="9" onClick={this.tap}>娱乐</p>
                        <p className={this.state.index == 10?"active":''} data-index="10" onClick={this.tap}>幽默</p>
                        <p className={this.state.index == 11?"active":''} data-index="11" onClick={this.tap}>伤感</p>
                        <p className={this.state.index == 12?"active":''} data-index="12" onClick={this.tap}>言情</p>
                        <p className={this.state.index == 13?"active":''} data-index="13" onClick={this.tap}>低俗</p>
                        <p className={this.state.index == 14?"active":''} data-index="14" onClick={this.tap}>高雅</p>
                        <p className={this.state.index == 15?"active":''} data-index="15" onClick={this.tap}>睿智</p>
                    </div>




                </div>
            </div>
        );
    }
}

export default Type;
