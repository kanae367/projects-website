import styles from './mobile.module.scss';
import {Swiper} from 'swiper/react';
import data from '../../data.json';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import MobileInfo from './mobile__info/MobileInfo';

const Mobile = ({currentSlide, setNumber}: {
    currentSlide: {
        links: {
            website: string;
            github: string;
        },
        text: string;
        name: string;
        technologies: string[];
        fullimage: string;

    };
    setNumber(arg1: number): void; 
}) => {
    const slides = data.map((project, index) => 
        <SwiperSlide
            key={project.name}
            className={styles.slide}>

            {({ isActive }) => {
                isActive ? setNumber(index) : null;

                return (
                <img className={styles.image} src={project.fullimage} alt={project.name} />
            )}}

        </SwiperSlide>) 

    return(
        <div className={styles.container}>
            <Swiper
                modules={[Navigation, Zoom, Pagination]}
                slidesPerView={1}
                allowTouchMove={false}
                navigation={true}
                zoom={true}
                pagination={true}
                className={styles.swiper}>

                { slides }

            </Swiper>
            
            <h2 className={styles.title}>{currentSlide.name}</h2>

            <MobileInfo
                text={currentSlide.text}
                technologies={currentSlide.technologies}
                links={currentSlide.links}/>
        </div>
    )
}

export default Mobile;