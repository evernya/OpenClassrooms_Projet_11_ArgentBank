//IMPORT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//COMPONENTS
import Form from "../../Components/Form/Form";

//ASSET
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

//CSS
import "../../Style/style.css"



function Login() {
    //affichage (render)
    return (
        <main className="main bg-dark">
            <section className="login__content">
                <FontAwesomeIcon icon={faCircleUser} className="login__content--icon"/>
                <h1>Sign In</h1>
                <Form />
            </section>
        </main>
      );
}

export default Login