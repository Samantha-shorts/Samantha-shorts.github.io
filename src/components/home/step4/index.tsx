import { NextPage } from 'next'
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss"
import { Autoplay, Pagination } from "swiper";

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
        className={`commentSwiper ${styles.commentSwiper}`}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide><img src="/images/comments/comment1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment7.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment8.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment9.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment10.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment11.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment12.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment13.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment14.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment15.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment16.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment17.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment18.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment19.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment20.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment21.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment22.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/images/comments/comment23.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>

  )
}

export default Step4