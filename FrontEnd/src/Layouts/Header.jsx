//IMPORT
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//ASSET
import logo from "../Assets/argentBankLogo.png";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';


//CSS
import '../Style/style.css';



export default function Header() {
    //state

    //affichage (render)
    return (
        <nav className="main-nav">
            <Link className="main-nav__logo" to={"/"}>
                <img className="main-nav__logo--image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            <div className="main-nav__item">
                <Link to={"/login"}><FontAwesomeIcon icon={faCircleUser} className="main-nav__item--icon"/>Sign In</Link>
            </div>
        </nav>
    );
};