import { useState, useEffect } from 'react';
import style from './app.module.scss';
import BottomSlider from '../bottomSlider/BottomSlider';
import Info from '../Info/Info';
import Links from '../links/Links';
import BackgroundImage from '../backgroundImage/BackgroundImage';
import data from '../../data.json';

const App = () => {
    const [currentSlide, setCurrentSlide] = useState(data[2]);
    const [currentSlideNumber, setCurrentSlideNumber] = useState(2);
    const [isChanging, setIsChanging] = useState(false);

    useEffect(() => {   
        setIsChanging(true);

        setTimeout(() => {
            setCurrentSlide(data[currentSlideNumber]);

            setIsChanging(false);
        }, 500);

    }, [currentSlideNumber])

    return(
        <div className={isChanging ? style["main_changing"] : style.main}>
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
    )
}

export default App;