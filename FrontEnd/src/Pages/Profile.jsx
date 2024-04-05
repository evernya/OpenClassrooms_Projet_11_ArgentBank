//IMPORT
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

//COMPONENTS
import EditName from '../Components/EditName/EditName';
import Card from '../Components/Card/Card';

//ASSET
import accountData from '../accountData.json';

//CCS
import '../Style/style.css';



function Profile() {
  //state
  const navigate = useNavigate();
  const authToken = useSelector(state => state.auth.token);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Si l'utilisateur déconnecté redirection page d'accueil
    if (!authToken) {
      navigate("/");
    } else {
      setLoading(false);
    }
  }, [authToken, navigate]);

  if (loading === true) {
    return (
      <div className='loader'></div>
    )
  }

  //affichage (render)
  return (
    <main className="main bg-dark">
      <EditName />
      <h2 className="sr-only">Accounts</h2>
      {accountData.accounts.map((account, index) => (
        <Card key={index} title={account.title} amount={account.amount} description={account.description} />
      ))}
    </main>
  );
}

export default Profile;