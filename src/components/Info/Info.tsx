import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Mousewheel } from 'swiper/modules';
import iconsSources from '../../icons.json';
import style from './info.module.scss';

const Info = ({name, text, technologies}: {
    name: string,
    text: string,
    technologies: string[]
}) => {
    const srcArray: {
        src: string;
        alt: string;
    }[] = technologies.map(item => iconsSources[iconsSources.findIndex(obj => obj.name === item)].data);
    const swiperSlides = srcArray.map(item => <SwiperSlide key={item.src} className={style.slide}><img className={style.image} src={`/icons/${item.src}`} alt={item.alt} /></SwiperSlide>)

    return(
        <div className={style.container}>
            <h2 className={style.header}>{name}</h2>
            <div className={style.swiperContainer}>
                <h3 className={style.title}>Technologies:</h3>
                <Swiper
                    modules={[Navigation, Mousewheel, A11y]}
                    spaceBetween={10}
                    slidesPerView={4}
                    mousewheel
                    onSlideChange={() => console.log('slide changed')}
                    className={style.swiper}
                    >
                    {swiperSlides}
                </Swiper>
            </div>
            <div className={style.brief}>
                <h3 className={style.title}>Brief:</h3>
                <p className={style.text}>{text}</p>
            </div>
        </div>
    )
}

export default Info;