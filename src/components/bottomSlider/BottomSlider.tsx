import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Mousewheel, Keyboard } from 'swiper/modules';
import style from './bottomSlider.module.scss';
import 'swiper/css';
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
            <div className={style.header}>
                <div className={style.line}></div>
                <div className={style.links}>
                    <a className={style.link} href={links.github} target='_blank'>Code</a>
                    <a className={style.link} href={links.website} target='_blank'>Visit Site</a>
                </div>
                <div className={style.line}></div>
            </div>
            <Swiper
                modules={[A11y, Mousewheel, Keyboard]}
                breakpoints={{
                    390: {
                        slidesPerView: 3,
                        spaceBetween: 15
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
                allowTouchMove={false}
                className={style.wrapper}>
                
                {swiperSlides}
            </Swiper>
        </div>
    )
}

export default BottomSlider;