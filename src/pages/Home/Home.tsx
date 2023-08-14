import { Component } from 'react';
import styles from './Home.module.scss';
import Navbar from '../../components/Navbar/Navbar';
import Avatar from '../../assets/avatar.png';

export default class Home extends Component {

    render() {
        return <>
            <Navbar />
            <main className={styles.main}>
                <section>
                    <div className={styles.container}>
                        <h1 className={styles.title}>Oi, eu sou o João Érik</h1>
                        <p className={styles.text}>
                            Desenvolvedor por paixão, apreciador da matemática e entusiasta das línguas.
                        </p>
                    </div>
                </section>
                <aside>
                    <img src={Avatar} alt="Foto de perfil" />
                </aside>
            </main>
        </>;
    }
}
