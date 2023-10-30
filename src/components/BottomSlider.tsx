import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import style from './bottomSlider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BottomSlider = () => {
    return(
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide changed')}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className={style.wrapper}>
            
            <SwiperSlide className={style.slide}>Slide 1</SwiperSlide>
            <SwiperSlide className={style.slide}>Slide 2</SwiperSlide>
            <SwiperSlide className={style.slide}>Slide 3</SwiperSlide>
            <SwiperSlide className={style.slide}>Slide 4</SwiperSlide>
            <SwiperSlide className={style.slide}>Slide 5</SwiperSlide>
            <SwiperSlide className={style.slide}>Slide 6</SwiperSlide>
            <SwiperSlide className={style.slide}>Slide 7</SwiperSlide>
            <SwiperSlide className={style.slide}>Slide 8</SwiperSlide>
            <SwiperSlide className={style.slide}>Slide 9</SwiperSlide>
            <SwiperSlide className={style.slide}>Slide 10</SwiperSlide>
        </Swiper>
    )
}

export default BottomSlider;