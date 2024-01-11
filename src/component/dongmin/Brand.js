import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import './dm.scss';

import 'bootstrap/dist/css/bootstrap.min.css'





function Brand(props) {
    return (
        <>
            <h2 style={{ display: 'flex', lineHeight: '1.5em', }}>{props.data.sectionbrand.h2}</h2>
            <div className='Br postion-relative d-flex  justify-content-space-between;'>


                <Swiper
                    modules={[EffectFade, Autoplay]} effect="fade"
                    loop={true}


                    // autoplay={{
                    //     delay: 2500,
                    // }}

                    spaceBetween={50}
                    slidesPerView={1}


                    navigation
                    className='brand-list'
                >

                    {props.data.sectionbrand.brandlist.map((brand, index) => (
                        <div key={index}>
                            <SwiperSlide className='bg-white '>
                                <div className='brand-item postion-relative'>
                                    <img src={brand.src} alt={`하림펫푸드 로고 ${index + 1}`}>
                                    </img>
                                </div>

                                <div>
                                    <h3>{brand.h3}</h3>
                                    <br />

                                    <p>{brand.p}</p>
                                    <br />

                                </div>

                            </SwiperSlide>

                        </div>

                    ))}
                </Swiper >
            </div >
        </>
    );
}

export default Brand;