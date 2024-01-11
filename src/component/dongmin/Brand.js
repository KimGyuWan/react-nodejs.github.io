import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import './dm.scss';
import 'bootstrap/dist/css/bootstrap.min.css'





function Brand(props) {
    return (
        <>
            <section id="section-brand">
                <div className='our position-rel'>
                    <h2 >{props.data.sectionbrand.h2}</h2>
                    <h2 >{props.data.sectionbrand.h2_1}</h2>

                </div>


                <Swiper
                    modules={[Navigation, EffectFade, Autoplay]} effect="fade"
                    loop={true}
                    rewind={true}

                    navigation={true}



                    autoplay={{
                        delay: 2500,
                    }}

                    spaceBetween={50}
                    slidesPerView={1}


                    className='brand-list'
                >

                    {props.data.sectionbrand.brandlist.map((brand, index) => (
                        <div class="swiper" id="mainSwiper">
                            <div class="swiper-wrapper" key={index}>
                                <div class="swiper-slide postion-rel d-flex align-items-center justify-content-center ">
                                    <SwiperSlide className='bg-white '>
                                        <div className='position-relative'>
                                            <img src={brand.src} alt={`하림펫푸드 로고 ${index + 1}`}>
                                            </img>
                                        </div>

                                        <div className='sh position-relative'>
                                            {brand.h3 && brand.h3}

                                            <div className='dp position-rel'>
                                                {brand.p && brand.p}
                                            </div>

                                        </div>




                                    </SwiperSlide>

                                </div>
                            </div>
                        </div>
                    ))}

                </Swiper >
            </section>
        </>
    );
}

export default Brand;