import { Link } from "react-router-dom";
import logo from './Logo-cinetag-branco 1.png';
import styles from './Header.module.css';
import HeaderLink from "../../components/HeaderLink";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="./">
        <img src={logo} alt="Logo do cinetag" />
      </Link>
      <nav>
        <HeaderLink url="./">
          Home
        </HeaderLink>
        <HeaderLink url="./Favorites">
          Favoritos
        </HeaderLink>
      </nav>
    </header>
  )
}

export default Header;