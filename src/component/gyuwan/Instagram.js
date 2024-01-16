import React from 'react';
import data from '../../data/data.json'
import './instagram.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function Instagram() {
  const speed = 10000;

  const direction = 'vertical';

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    780: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
  };
  return (
    <>
      <section id='section_instagram' className='container flex-row-reverse justify-content-around'>
        <div class="instaText">
          <h2>INSTAGRAM후기</h2>
          <div class="istagramMain mt-4">
            <img src="./img/gyuwan/instagram/instagramMain1.jpg" alt="인스타그램후기메인사진1" />
          </div>
        </div>
        <div className='d-flex insta'>
          <Swiper className='instagroup1'
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={speed}
            direction={direction}
            breakpoints={breakpoints}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {
              data.instagram_instagroup1.map((el, idx) => {
                return (
                  <SwiperSlide>
                    <img key={idx} src={el.instagram_instagroup1_src} alt={el.instagram_instagroup1_alt} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>

          <Swiper className='instagroup2 hidden'
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={speed}
            direction={direction}
            breakpoints={breakpoints}
            spaceBetween={10}
            slidesPerView={2.5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {
              data.instagram_instagroup2.map((el, idx) => {
                return (
                  <SwiperSlide>
                    <img key={idx} src={el.instagram_instagroup2_src} alt={el.instagram_instagroup2_alt} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Instagram;