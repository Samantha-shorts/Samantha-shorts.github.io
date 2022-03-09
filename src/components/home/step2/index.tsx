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
              <p>ゾクゾク恐怖ホラー</p>
              <img className="pc" src="/images/videos/video1-pc.jpg" alt="" />
              <img className="sp" src="/images/videos/video1-sp.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <p>ほっこり笑みが溢れる</p>
              <img className="pc" src="/images/videos/video2-pc.jpg" alt="" />
              <img className="sp" src="/images/videos/video2-sp.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <p>まさかの展開！</p>
              <img className="pc" src="/images/videos/video3-pc.jpg" alt="" />
              <img className="sp" src="/images/videos/video3-sp.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <p>考えさせられる</p>
              <img className="pc" src="/images/videos/video4-pc.jpg" alt="" />
              <img className="sp" src="/images/videos/video4-sp.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <p>心にグッとくる</p>
              <img className="pc" src="/images/videos/video5-pc.jpg" alt="" />
              <img className="sp" src="/images/videos/video5-sp.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <p>世界を知るドキュメンタリー</p>
              <img className="pc" src="/images/videos/video6-pc.jpg" alt="" />
              <img className="sp" src="/images/videos/video6-sp.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <p>大切なあの人と</p>
              <img className="pc" src="/images/videos/video7-pc.jpg" alt="" />
              <img className="sp" src="/images/videos/video7-sp.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Step2