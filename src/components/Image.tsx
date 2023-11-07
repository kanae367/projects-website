import { useEffect, useState } from 'react';
import style from './app.module.scss';

const Image = ({alt, src}: {
    alt: string;
    src: string;
}) => {
    const [imageSource, setImageSource] = useState(src);
    const [imageState, setImageState] = useState("idle");

    let newSrc = src;

    const changeImage = () => {
        if(newSrc.includes("1")){
            newSrc = newSrc.replace("1", "2");
        }else if (newSrc.includes("2")){
            newSrc = newSrc.replace("2", "");
        }else{
            newSrc = newSrc.replace(".", "1.");
        }
        
        setImageState("changing");
        
        setTimeout(() => {
            setImageSource(newSrc);
            setImageState("idle");
        }, 250);
    }
    
    useEffect(() => {
        setImageSource(src);

        const imageChanger = setInterval(changeImage, 7500);

        return () => clearInterval(imageChanger);
    }, [src])


    return(
        <img className={imageState === "idle" ? style["background-image"] : style["background-image"] + " " + style["background-image_changing"]} src={imageSource} alt={alt} />
    )
}

export default Image;