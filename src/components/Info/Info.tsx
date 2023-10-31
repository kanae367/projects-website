import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Mousewheel } from 'swiper/modules';
import iconsSources from '../../icons.json';
import style from './info.module.scss';

const technologiesData: {
    src: string,
    alt: string
}[] = [
    {
        src: 'html.svg',
        alt: 'HTML 5'
    },
    {
        src: 'css3.svg',
        alt: 'CSS 3'
    },
    {
        src: 'jquery.svg',
        alt: 'JQuery'
    },
    {
        src: 'js.svg',
        alt: 'JavaScript'
    },
    {
        src: 'figma.svg',
        alt: 'Figma'
    },
]

const Info = ({name, text, technologies}: {
    name: string,
    text: string,
    technologies: string[]
}) => {
    const srcArray = technologies.map(item => iconsSources[item])
    const swiperSlides = srcArray.map(item => <SwiperSlide key={item.src} className={style.slide}><img className={style.image} src={`/icons/${item.src}`} alt={item.alt} /></SwiperSlide>)

    return(
        <div className={style.container}>
            <h2 className={style.header}>{name}</h2>
            <div className={style.swiperContainer}>
                <h3 className={style.toolsTitle}>Technologies:</h3>
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
            <p className={style.text}>{text}</p>
        </div>
    )
}

export default Info;