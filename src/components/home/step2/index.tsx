import { NextPage } from 'next'
import styles from "./styles.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";


const Step2:NextPage = () => {
  return (
    <div className={styles.step2}>
      <div>
        <h2 className={styles.subtitle}>おすすめの作品が期間限定で<br className="pcNo"/><span>無料</span>公開中！</h2>
        <div className={styles.slide}>
          <Swiper
            slidesPerView="auto"
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="videoSwiper"
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <p>＼グッとくるならこれ／</p>
              <img className="pc" src="/images/video3.jpeg" alt="" />
              <img className="sp" src="/images/video4.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <p>＼本物の愛を💖／</p>
              <img className="pc" src="/images/video2.jpeg" alt="" />
              <img className="sp" src="/images/video5.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <p>＼スカッとできる✨／</p>
              <img className="pc" src="/images/video1.jpeg" alt="" />
              <img className="sp" src="/images/video6.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <p>＼グッとくるならこれ／</p>
              <img className="pc" src="/images/video3.jpeg" alt="" />
              <img className="sp" src="/images/video4.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <p>＼本物の愛を💖／</p>
              <img className="pc" src="/images/video2.jpeg" alt="" />
              <img className="sp" src="/images/video5.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <p>＼スカッとできる✨／</p>
              <img className="pc" src="/images/video1.jpeg" alt="" />
              <img className="sp" src="/images/video6.jpeg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Step2