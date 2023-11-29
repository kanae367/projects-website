import styles from './mobileInfo.module.scss';
import { useState } from 'react';
import iconsSources from '../../../icons.json';

const MobileInfo = ({links, text, technologies}: {
    links: {
        website: string;
        github: string;
    };
    text: string;
    technologies: string[];
}) => {
    const [isTechnologies, setIsTechnologies] = useState(false)
    
    const srcArray: {
        src: string;
        alt: string;
    }[] = technologies.map(item => iconsSources[iconsSources.findIndex(obj => obj.name === item)].data);

    const icons = srcArray.map(item => <img key={item.alt} className={styles.image} src={`/icons/${item.src}`} alt={item.alt} />)
    

    const handleButtonClick = () => {
        setIsTechnologies(!isTechnologies);
    }

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h3 className={styles.title}>
                    {
                        isTechnologies 
                            ? "Technologies:" 
                            : "Brief:"
                    }
                </h3>

                <button type='button' className={styles.button} onClick={handleButtonClick}>
                    {
                        isTechnologies 
                            ? <img className={styles.buttonIcon} src="/icons/gear.svg" alt="gear" />
                            : "i"
                    }
                </button>                
            </div>
            
            <div className={styles.content}>
                    {
                        isTechnologies
                            ? <div className={styles.icons}>
                                { icons }
                            </div>
                            : <p className={styles.text}>
                                { text }
                            </p>
                    }
            </div>

            <div className={styles.links}>
                <a className={styles.link} href={links.website}>Visit Site</a>
                <a className={styles.link} href={links.github}>Code on GitHub</a>
            </div>
        </div>
    )
}

export default MobileInfo;