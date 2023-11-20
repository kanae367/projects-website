import { useState, useEffect } from 'react';
import style from './app.module.scss';
import BottomSlider from '../bottomSlider/BottomSlider';
import Info from '../Info/Info';
import Links from '../links/Links';
import BackgroundImage from '../backgroundImage/BackgroundImage';
import data from '../../data.json';
import { useMediaQuery } from 'react-responsive';
import Mobile from '../mobile/Mobile';

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
        }, 500);

    }, [currentSlideNumber])

    return(
        isLargeScreen 
            ? <div className={isChanging ? style["main_changing"] : style.main}>
                <BackgroundImage 
                    alt={currentSlide.name}
                    src={currentSlide.fullimage}/>
                <Links 
                    links={currentSlide.links}/>
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