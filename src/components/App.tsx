import style from './app.module.scss';
import BottomSlider from './BottomSlider';

const App = () => {
    return(
        <div className={style.main}>
            <img className={style["background-image"]} src="/spacetourism.png" alt="space tourism" />
            <BottomSlider/>
        </div>
    )
}

export default App;