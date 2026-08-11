import { NavLink } from "react-router"


export function Navigation(){
    return(
        <nav>
        <ul>
        <li>
        <NavLink to={"/"}>Forside</NavLink>
        </li>
         <li>
        <NavLink to={"estages"}>Boliger</NavLink>
        </li>
         <li>
        <NavLink to={"/contact"}>Kontakt</NavLink>
        </li>
         <li>
        <NavLink to={"/login"}>Login</NavLink>
        </li>
        </ul>
        </nav>
    )
}