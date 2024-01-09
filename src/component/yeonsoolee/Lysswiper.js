import React from 'react'
import { Link } from 'react-router-dom'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



//data
import data from '../../data/data.json'


function Lysswiper() {
    return (
        <section id='slide_banner'>
            <div className='container'>
                <Swiper
                    modules={[EffectFade, Autoplay, Navigation, Pagination]} effect="fade"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    loop={true}

                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}


                >
                    {
                        data.slide_banner.map((el, idx) => {
                            return <SwiperSlide key={idx}>
                                <Link to={el.slide_banner_href}>
                                    <img src={el.slide_banner_src} alt={el.slide_banner_alt}></img>
                                    <div className={el.slide_banner_cls}>
                                        <h3>{el.slide_banner_h3}</h3>
                                        <p>{el.slide_banner_p}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        })
                    }
                    <div className='btns position-absolute'>
                        <button className='toggle position-relative'>
                        </button>
                    </div>
                </Swiper>
            </div>
        </section>
    )
}

export default Lysswiper
