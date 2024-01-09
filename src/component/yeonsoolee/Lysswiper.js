import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import swiperCore from 'swiper/core';
import 'swiper/swiper-bundle.css';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//data
import data from '../../data/data.json'

//scss
import './slidebanner.scss'

//clsx
import clsx from 'clsx';




function Lysswiper() {
    const [isPlaying, setIsPlaying] = useState(false);
    const swiperRef = useRef(null);
    const [swiperIndex, setSwiperIndex] = useState(0);

    const togglePlay = () => {
        const buttonToggle = document.querySelector('.toggle')
        const swiperInstance = swiperRef.current.swiper;

        if (isPlaying) {
            swiperInstance.autoplay.stop();
            buttonToggle.classList.remove('on')
        } else {
            swiperInstance.autoplay.start();
            buttonToggle.classList.add('on')
        }
        setIsPlaying(!isPlaying);
    };





    return (
        <section id='slide_banner' className={clsx('active' + swiperIndex)}>
            <div className='container'>
                <Swiper
                    onActiveIndexChange={(swiperCore) => { setSwiperIndex(swiperCore.realIndex) }}

                    ref={swiperRef}
                    modules={[EffectFade, Autoplay, Navigation, Pagination]} effect="fade"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop={true}

                >
                    {
                        data.slide_banner.map((el, idx) => {
                            return <SwiperSlide key={idx} className={clsx('active' + idx)}>
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
                        <button className='toggle position-relative' onClick={togglePlay}>
                        </button>
                    </div>

                </Swiper>

            </div>
        </section>
    )
}

export default Lysswiper
