import styles from './ProjectCard.module.scss';

export default function ProjectCard(props: any) {
    const name = props.name;
    const description = props.description;
    const languages = props.languages;
    const link = props.link;

    return <>
        <div className={styles.main}>
            <h1 className={styles.name}>{ name }</h1>
            <p className={styles.description}>{ description }</p>
            <a className={styles.link} href={link} target='_blank' rel='noopener noreferrer'>VER</a>
        </div>
    </>;
}