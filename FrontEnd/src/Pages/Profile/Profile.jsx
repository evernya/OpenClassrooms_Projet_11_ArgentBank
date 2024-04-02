//COMPONENTS
import EditName from '../../Components/EditName/EditName';
//ASSET
import accountData from '../../accountData.json';

//CCS
import '../../Style/style.css'



function Profile() {
    //affichage (render)
    return (
      <main className="main bg-dark">
        <EditName />
        <h2 className="sr-only">Accounts</h2>
        {accountData.accounts.map((account, index) => (
          <section key={index} className="account">
            <div className="account__content">
              <h3 className="account__content--title">{account.title}</h3>
              <p className="account__content--amount">{account.amount}</p>
              <p className="account__content--amount__description">{account.description}</p>
            </div>
  
            <div className="account__content--cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        ))}
      </main>
    );
  }
  
  export default Profile;