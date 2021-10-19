import React from 'react'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SliderContainer } from './style'
import "swiper/swiper-bundle.min.css"
import "swiper/components/navigation/navigation.less"
SwiperCore.use([Autoplay, Pagination])

const Slider = ({ bannerList = [] }) => {
    return <SliderContainer>
        <div className="before"></div>
            <Swiper
                style={{width: "98%", borderRadius: 6}}
                initialSlide={0}   //初始化时的索引位置
                speed={3000} //页面切换速度，slider自动滑动开始到结束的时间（单位ms）
                loop={true} //是否形成环路
                spaceBetween={0} //页面直接的间距
                slidesPerView={1} //设置slider容器能够同时显示的slides数量(carousel模式)。
                //自动滚屏
                autoplay={{
                    delay: 300, //自动滚屏速度
                    disableOnInteraction: false,  //false: 鼠标操作屏幕后继续自动滚屏
                }}
                onSwiper={
                    (swiper) => {
                        //鼠标悬浮暂停效果
                        swiper.$el[0].addEventListener('mouseover', () => swiper.autoplay.stop());
                        //鼠标移开后继续自动滚屏效果
                        swiper.$el[0].addEventListener('mouseleave', () => swiper.autoplay.start());
                    }
                }
                pagination={{ clickable: true }}
            >
                {
                    bannerList.map((item, index) => (
                        <SwiperSlide key={index} style={{ height: 160 }}>
                            <img src={item.imageUrl} width="100%" height="100%" alt="推荐" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
    </SliderContainer>
}

export default Slider