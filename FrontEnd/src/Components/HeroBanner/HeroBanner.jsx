//CSS
import "../../Style/style.css"



export default function HeroBanner() {
    //affichage (render)
    return (
        <div className="hero">
          <section className="hero__content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="hero__content--subtitle">No fees.</p>
            <p className="hero__content--subtitle">No minimum deposit.</p>
            <p className="hero__content--subtitle">High interest rates.</p>
            <p className="hero__content--text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
      );
}