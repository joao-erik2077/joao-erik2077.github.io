import { Component } from "react";
import styles from './Navbar.module.scss';

export default class Navbar extends Component {
    render() {
        return <>
            <nav className={styles.navbar}>
                <div className={styles.items}>
                    <a href="#sobremim">Sobre Mim</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#contato">Contato</a>
                </div>
            </nav>
        </>;
    }
}