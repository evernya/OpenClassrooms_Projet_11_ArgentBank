//IMPORT
import { Link } from "react-router-dom";

//CSS
import "../../Style/style.css"


function Error() {
    //affichage (render)
    return(
        <main className="main error">
            <h1>Désolé nous ne parvenons pas à retrouver cette page !</h1>
            <Link to={'/'} className="error__button">Retournez à la page d'accueil</Link>
        </main>
    );
}

export default Error