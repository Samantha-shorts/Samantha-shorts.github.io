import { NextPage } from 'next'
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss"
import { Autoplay } from "swiper";

const Step4:NextPage = () => {
  return (
    <div className={styles.step4}>
      <h2 className={styles.subtitle}>利用者の方々の声</h2>
      <Swiper
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="commentSwiper"
        modules={[Autoplay]}
      >
        <SwiperSlide><img src="/images/comment1.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comment1.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comment1.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comment1.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comment1.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comment1.jpeg" alt="" /></SwiperSlide>
      </Swiper>
    </div>

  )
}

export default Step4