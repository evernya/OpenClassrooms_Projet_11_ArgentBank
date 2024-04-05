//IMPORT


//CSS
import "../../Style/style.css"



export default function Card( {title, amount, description} ) {
    //affichage(render)
    return (
        <section className="account">
            <div className="account__content">
                <h3 className="account__content--title">{title}</h3>
                <p className="account__content--amount">{amount}</p>
                <p className="account__content--amount__description">{description}</p>
            </div>

            <div className="account__content--cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
};


