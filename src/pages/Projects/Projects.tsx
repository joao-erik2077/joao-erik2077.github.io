import { Component, ReactNode } from "react";
import styles from './Projects.module.scss';
import { IProjectCard } from "../../interfaces/IProjectCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

export default class Projects extends Component {
    private projectData: IProjectCard[] = [
        {
            name: 'gokeot',
            description: 'Bot para Discord feito com DiscordJS',
            languages: [
                'javascript',
            ],
            link: 'https://github.com/joao-erik2077/gokeot',
        },
        {
            name: 'pokedexApp',
            description: 'Aplicativo de Pokedex feito com Ionic Framework',
            languages: [
                'typescript',
                'html',
                'scss',
            ],
            link: 'https://github.com/joao-erik2077/pokedexApp',
        },
        {
            name: 'Bloons JS',
            description: 'Um facilitador para trabalhar com StatsNite Bloons TD 6 API',
            languages: [
                'javascript',
            ],
            link: 'https://github.com/joao-erik2077/bloons-js',
        },
        {
            name: 'Lutherik Robotic Arm',
            description: 'Garra Robótica em Arduino com uma interface funcional feita com Express e Johnny Five. Feito com meus amigos',
            languages: [
                'javascript',
                'html',
                'scss',
                'c++',
            ],
            link: 'https://github.com/Arduino-244/Lutherik-Robotic-Arm',
        },
    ];
    private projects = this.projectData.map(project => <ProjectCard 
        name={project.name}
        description={project.description}
        languages={project.languages}
        link={project.link}
        />);

    render(): ReactNode {
        return <>
            <div className={styles.projects}>{ this.projects }</div>
        </>;
    }
}