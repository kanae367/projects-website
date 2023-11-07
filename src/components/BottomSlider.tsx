import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Mousewheel, Keyboard } from 'swiper/modules';
import style from './bottomSlider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import data from "../data.json";

const BottomSlider = ({setNumber}: {
    setNumber(arg0: number): void
}) => {
    const swiperSlides = data.map((project, index) => 
        <SwiperSlide 
            key={project.name} 
            className={style.slide}>
            {({ isActive }) => {
                isActive ? setNumber(index + 2) : null;

                return (
                <img className={style.image} src={project.preview} alt={project.name} />
            )}}
        </SwiperSlide>)
    return(
        <div className={style["slider-outer"]}>
            <Swiper
                modules={[Navigation, A11y, Mousewheel, Keyboard]}
                spaceBetween={50}
                slidesPerView={5} 
                mousewheel
                keyboard
                loop
                className={style.wrapper}>
                
                {swiperSlides}
            </Swiper>
        </div>
    )
}

export default BottomSlider;