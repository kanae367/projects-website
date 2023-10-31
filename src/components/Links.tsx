import style from './links.module.scss';

const Links = ({links} : {
    links: {
        website: string,
        github: string
    }
}) => {
    return(
        <div className={style.container}>
            <a className={style.link} href={links.website} target='_blank'>Visit Site</a>
            <a className={style.link} href={links.github} target='_blank'>Code on GitHub</a>
        </div>
    )
}

export default Links;