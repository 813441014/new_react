import React, {Component} from 'react';
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
require("./banner.css")
class Banner extends Component {
    componentDidMount(){
        new Swiper ('.swiper-container', {
            loop: true,  //循环
            // autoplay: {   //滑动后继续播放（不写官方默认暂停）
            //     disableOnInteraction: false,
            // },
            pagination: {  //分页器
                el: '.swiper-pagination'
            }
        })
    }
    render() {
        return (
            <div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={[require("../static/image/banner.jpg")]} alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src={[require("../static/image/banner.jpg")]} alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src={[require("../static/image/banner.jpg")]} alt=""/>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>

                    {/*<div className="swiper-button-prev"></div>*/}
                    {/*<div className="swiper-button-next"></div>*/}

                    <div className="swiper-scrollbar"></div>
                </div>
            </div>
        );
    }
}

export default Banner;
