import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import style from './app.module.scss';
import Info from '../Info/Info';
import BottomSlider from '../bottomSlider/BottomSlider';
import BackgroundImage from '../backgroundImage/BackgroundImage';
import Mobile from '../mobile/Mobile';
import data from '../../data.json';
import { preloadImage } from '../../preloadImage';

const App = () => {
    const [currentSlide, setCurrentSlide] = useState(data[2]);
    const [currentSlideNumber, setCurrentSlideNumber] = useState(2);
    const [isChanging, setIsChanging] = useState(false);
    const isLargeScreen = useMediaQuery({query: '(min-width: 1280px)'});

    useEffect(() => {
        data.forEach(item => {
            if(isLargeScreen){
                preloadImage(item.fullimage);
                preloadImage(item.fullimage.split('.').join('1.'));
            }else{
                preloadImage(item.mobileImage);
            }
        });
    }, []);

    useEffect(() => {
        setIsChanging(true);
        
        const timeout = setTimeout(() => {
            setCurrentSlide(data[currentSlideNumber]);

            setIsChanging(false);
        }, isLargeScreen ? 500 : 150);

        return () => clearTimeout(timeout);
    }, [currentSlideNumber])

    return(
        isLargeScreen 
            ? <div className={isChanging ? style["main_changing"] : style.main}>
                <BackgroundImage 
                    alt={currentSlide.name}
                    src={currentSlide.fullimage}/>
                <Info 
                    name={currentSlide.name}
                    text={currentSlide.text}
                    technologies={currentSlide.technologies}/>
                <BottomSlider
                    setNumber={setCurrentSlideNumber}
                    links={currentSlide.links}/>
                <a className={style.backToMain} href="https://pikulinweb.ru">
                    <svg className={style.image} width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.9999 0.0507812C23.7824 0.0507812 23.5658 0.119761 23.3808 0.259761L0.380785 18.2109C-0.0492153 18.5509 -0.129135 19.1791 0.210865 19.6191C0.550865 20.0491 1.17906 20.1291 1.61906 19.7891L2.99992 18.7109V45C2.99992 45.55 3.44992 46 3.99992 46H17.9999V28H29.9999V46H43.9999C44.5499 46 44.9999 45.55 44.9999 45V18.7109L46.3808 19.7891C46.5708 19.9291 46.7799 20 46.9999 20C47.2999 20 47.589 19.8691 47.789 19.6191C48.129 19.1791 48.0491 18.5509 47.6191 18.2109L24.6191 0.259761C24.4341 0.119761 24.2174 0.0507812 23.9999 0.0507812ZM33.9999 4V5.05078L39.9999 9.73047V4H33.9999Z" fill="white"/>
                    </svg>
                    <span className={style.text}>
                        Home Page
                    </span>
                </a>
            </div>
        : <Mobile
            setNumber={setCurrentSlideNumber}
            currentSlide={currentSlide}/>
    )
}

export default App;