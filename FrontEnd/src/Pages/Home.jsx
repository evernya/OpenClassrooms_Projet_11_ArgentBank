//COMPONENTS
import Feature from "../Components/Feature/Feature";
import HeroBanner from "../Components/HeroBanner/HeroBanner";



function Home() {
    //affichage (render)
    return (
        <section className="main">
            <HeroBanner />
            <Feature />
        </section>
      );
}

export default Home