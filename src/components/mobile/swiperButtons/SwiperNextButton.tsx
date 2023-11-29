import { useSwiper } from "swiper/react";
import './swiperbuttons.scss';

const SwiperButton = ({type}: {type: 'next' | 'prev'}) => {
    const swiper = useSwiper();

    return(
        <button 
            type="button" 
            onClick={
                type === "next"
                    ? () => swiper.slideNext()
                    : () => swiper.slidePrev()
                } 
            className={
                type === "next" 
                    ? "button button-next"
                    : "button button-prev"
                }/>
    )
}

export default SwiperButton;