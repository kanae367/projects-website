import { useEffect, useState } from 'react';
import style from './image.module.scss';

interface image {
    src: string;
    alt: string;
}

const BackgroundImage = ({src, alt}: image) => {
    const [isFirst, setIsFirst] = useState(true);
    const isMobile = window.innerWidth < 800;

    useEffect(() => {
        const interval = setTimeout(() => {
            !isMobile && setIsFirst(!isFirst);
        }, 10000)

        return clearInterval(interval);
    }, [isFirst])

    useEffect(() => {
        setIsFirst(true);
    }, [src])

    return(
        <>
            <img className={isFirst ? style["background-image"] : style["background-image_second"]} src={isMobile ? src.replace('fullimages', 'mobile') : src} alt={alt} />
            {
                !isMobile && <img className={isFirst ? style["background-image_second"] : style["background-image"]} src={src.replace('.', '1.')} alt={alt} />
            }
        </>
    )
} 

export default BackgroundImage;