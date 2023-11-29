import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import style from './app.module.scss';
import Info from '../Info/Info';
import BottomSlider from '../bottomSlider/BottomSlider';
import BackgroundImage from '../backgroundImage/BackgroundImage';
import Mobile from '../mobile/Mobile';
import data from '../../data.json';

const App = () => {
    const [currentSlide, setCurrentSlide] = useState(data[2]);
    const [currentSlideNumber, setCurrentSlideNumber] = useState(2);
    const [isChanging, setIsChanging] = useState(false);
    const isLargeScreen = useMediaQuery({query: '(min-width: 1280px)'});

    useEffect(() => {
        setIsChanging(true);

        setTimeout(() => {
            setCurrentSlide(data[currentSlideNumber]);

            setIsChanging(false);
        }, isLargeScreen ? 500 : 150);

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
            </div>
        : <Mobile
            setNumber={setCurrentSlideNumber}
            currentSlide={currentSlide}/>
    )
}

export default App;