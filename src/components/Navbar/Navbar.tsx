import styles from './Navbar.module.scss';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    return <>
        <nav className={styles.navbar}>
            <div className={styles.items}>
                <Link to='/aboutme' className={`${styles.link} ${location.pathname === '/aboutme' ? styles.highlight : ''}`}>Sobre Mim</Link>
                <Link to='/projects' className={`${styles.link} ${location.pathname === '/projects' ? styles.highlight : ''}`}>Projetos</Link>
                <Link to='/contact' className={`${styles.link} ${location.pathname === '/contact' ? styles.highlight : ''}`}>Contato</Link>
            </div>
        </nav>
    </>;
}