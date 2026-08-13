import { NavLink } from "react-router";
import Logo from '../../assets/Logo.png'
import style from './Navigation.module.scss';

export function Navigation() {
  return (
    <nav className={style.navStyle}>
      <figure>
        <img src={Logo} alt="micasa_logo" />
      </figure>

      <ul>
        <li>
          <NavLink to={"/"}>Forside</NavLink>
        </li>
        <li>
          <NavLink to={"estates"}>Boliger</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Kontakt</NavLink>
        </li>
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      <li>
        <input type="search" placeholder="søg" />
        <button>Søg</button>
      </li>
      </ul>
    </nav>
  );
}
