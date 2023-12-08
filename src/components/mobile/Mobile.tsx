import styles from './mobile.module.scss';
import {Swiper} from 'swiper/react';
import data from '../../data.json';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import MobileInfo from './mobile__info/MobileInfo';
import SwiperButton from './swiperButtons/SwiperButton';

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
                    <div className={styles.imageContainer}>
                        <div className={styles.imageContainerInner}>
                            <img className={styles.image} src={project.mobileImage} alt={project.name} />
                        </div>
                    </div>
            )}}

        </SwiperSlide>) 

    return(
        <div className={styles.container}>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                allowTouchMove={false}
                pagination={true}
                loop={true}
                className={styles.swiper}>
                
                <SwiperButton type="prev"/>
                { slides }

                <SwiperButton type="next"/>        
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