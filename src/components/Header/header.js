import './header.css';

function Header() {
    return (
    <header class="header" id="header">
        <div class="header-wide" id="header-wide">
            <div class="header-inner" id="header-inner">
                <nav className="nav-bar" id="nav-bar">
                    <ul className="nav-menu">
                        <li className="nav-item"><a href="#" className="nav-link" img="/logo.png">LetCreation</a></li>
                        <li className="nav-item"><a href="https://www.notion.so/Introduce-9707df63fe504ddbb5ed7140bc7608a0" className="nav-link">Contact</a></li>
                        <li className="nav-item"><a href="https://github.com/AriSongYe/LetCreation" className="nav-link">GitHub</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
);
}

export default Header;