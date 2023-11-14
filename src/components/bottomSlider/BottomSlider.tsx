import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Mousewheel, Keyboard } from 'swiper/modules';
import style from './bottomSlider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import data from "../../data.json";

const BottomSlider = ({setNumber, links}: {
    setNumber(arg0: number): void;
    links: {
        website: string;
        github: string;
    }
}) => {
    const swiperSlides = data.map((project, index) => 
        <SwiperSlide 
            key={project.name} 
            className={style.slide}>
            {({ isActive }) => {
                isActive ? setNumber(index) : null;

                return (
                <img className={style.image} src={project.preview} alt={project.name} />
            )}}
        </SwiperSlide>)
    return(
        <div className={style["slider-outer"]}>
            <div className={style.links}>
                <a className={style.link} href="#">Code</a>
                <a className={style.link} href="#">Visit Site</a>
            </div>
            <Swiper
                modules={[A11y, Mousewheel, Keyboard]}

                breakpoints={{
                    390: {
                        slidesPerView: 1,
                    },
                    768:{
                        slidesPerView: 3,
                        spaceBetween: 50
                    },
                    1280:{
                        slidesPerView: 5,
                        spaceBetween: 50
                    }
                }}
                mousewheel={true}
                keyboard={true}
                loop={true}
                normalizeSlideIndex={true}
                centeredSlidesBounds={true}
                slideToClickedSlide={true}
                centeredSlides={true}
                className={style.wrapper}>
                
                {swiperSlides}
            </Swiper>
        </div>
    )
}

export default BottomSlider;