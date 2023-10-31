import { useState, useEffect } from 'react';
import style from './app.module.scss';
import BottomSlider from './BottomSlider';
import Info from './Info/Info';
import Links from './Links';
import data from '../data.json';

interface SlideInfo {
    name: string;
    text: string;
    technologies: string[];
    fullimage: string;
    preview: string;
    links: {
        website: string;
        github: string;
    };
}

const App = () => {
    const [currentSlide, setCurrentSlide] = useState(data[2]);
    const [currentSlideNumber, setCurrentSlideNumber] = useState(2);

    useEffect(() => {
        if(currentSlideNumber < data.length){
            setCurrentSlide(data[currentSlideNumber])
        }else if(currentSlideNumber === 12){
            setCurrentSlide(data[1]);
        }else{
            setCurrentSlide(data[0]);
        }
    }, [currentSlideNumber])

    return(
        <div className={style.main}>
            <img className={style["background-image"]} src={currentSlide.fullimage} alt="space tourism" />
            <Links 
                links={currentSlide.links}/>
            <Info 
                name={currentSlide.name}
                text={currentSlide.text}
                technologies={currentSlide.technologies}/>
            <BottomSlider
                setNumber={setCurrentSlideNumber}/>
        </div>
    )
}

export default App;