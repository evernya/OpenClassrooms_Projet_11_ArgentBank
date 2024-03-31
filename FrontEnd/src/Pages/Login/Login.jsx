//COMPONENTS

//CSS
import "../../Style/style.css"



function Login() {
    //affichage (render)
    return (
        <main className="main bg-dark">
            <section className="login__content">
                <i className="fa fa-user-circle login__content--icon"></i>
                <h1>Sign In</h1>
            </section>
        </main>
      );
}

export default Login