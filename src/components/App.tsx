import { useState, useEffect } from 'react';
import style from './app.module.scss';
import BottomSlider from './BottomSlider';
import Info from './Info/Info';
import Links from './Links';
import Image from './Image';
import data from '../data.json';

// interface SlideInfo {
//     name: string;
//     text: string;
//     technologies: string[];
//     fullimage: string;
//     preview: string;
//     links: {
//         website: string;
//         github: string;
//     };
// }

const App = () => {
    const [currentSlide, setCurrentSlide] = useState(data[2]);
    const [currentSlideNumber, setCurrentSlideNumber] = useState(2);
    const [isChanging, setIsChanging] = useState(false);
    
    let newSlide = data[0];

    useEffect(() => {   
        setIsChanging(true);
        
        if(currentSlideNumber < data.length){
            newSlide = data[currentSlideNumber];
        }else if(currentSlideNumber === 12){
            newSlide = data[1];
        }else{
            newSlide = data[0];
        }
        setTimeout(() => {
            setCurrentSlide(newSlide);

            setIsChanging(false);
        }, 250);

    }, [currentSlideNumber])

    return(
        <div className={isChanging ? style["main_changing"] : style.main}>
            <Image 
                alt={currentSlide.name}
                src={currentSlide.fullimage}/>
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