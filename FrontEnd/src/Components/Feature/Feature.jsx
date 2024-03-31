//ASSETS
import iconChat from "../../Assets/icon-chat.png";
import iconMoney from "../../Assets/icon-money.png";
import iconSecurity from "../../Assets/icon-security.png";

//CSS
import "../../Style/style.css"



export default function Features() {
    //affichage (render)
    return (
        <section className="features">
          <h2 className="sr-only">Features</h2>

          <div className="features__item">
            <img src={iconChat} alt="Chat Icon" className="features__item--icon" />
            <h3 className="features__item--title">You are our #1 priority</h3>
            <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
          </div>
          <div className="features__item">
            <img src={iconMoney} alt="Money Icon" className="features__item--icon" />
            <h3 className="features__item--title">More savings means higher rates</h3>
            <p>The more you save with us, the higher your interest rate will be!</p>
          </div>
          <div className="features__item">
            <img src={iconSecurity} alt="Security Icon" className="features__item--icon" />
            <h3 className="features__item--title">Security you can trust</h3>
            <p>We use top of the line encryption to make sure your data and money is always safe.</p>
          </div>
        </section>
      );
}