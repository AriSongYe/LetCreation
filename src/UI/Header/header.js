import styles from './header.module.css';

function Header() {
    return(
        <header data-testid="App-header"id="App-header" className="App-header">
            <div className={styles.widest} id="header-widest">
                <div className={styles.inner} id="header-inner">
                    <nav className={styles.bar} id="nav-bar">
                        <ul className={styles.menu}>
                            <li className={styles.item}><a href="/" className={styles.link} img="/logo.png">LetCreation</a></li>
                            <li className={styles.item}><a href="https://www.notion.so/Introduce-9707df63fe504ddbb5ed7140bc7608a0" className={styles.link}>Contact</a></li>
                            <li className={styles.item}><a href="https://github.com/AriSongYe/LetCreation" className={styles.link}>GitHub</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;