//IMPORT
import React, { useState } from "react";
//REDUX
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { profileUser } from "../../Reducers/ProfileSlice";

import { hostName } from "../../Reducers/api";

//CSS
import "../../Style/style.css";

export default function ModalEditName({ modalOnClick }) {
  //state
  const dispatch = useDispatch();

  const authToken = useSelector((state) => state.auth.token);
  const profileUserData = useSelector((state) => state.profile.user);

  const [editUsername, setEditUsername] = useState("");
  const [infoError, setInfoError] = useState("");

  //comportement
  const handleSubmit = async (e) => {
    e.preventDefault();

    //récupération de la valeur de l'input
    const inputValue = document.getElementById("username").value;

    //Vérification si l'input username est vide
    if(inputValue.trim() === ""){
      setInfoError("L'username ne peut pas être vide.")
      return;
    }

    //MAJ des infos utilisateurs
    try {
      const response = await axios.put(`${hostName}/user/profile`, { userName: editUsername },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })

      const responseData = response.data.body.userName;

      if(responseData){
        dispatch(profileUser(authToken)); // màj username dans store
        setEditUsername(""); // Réinitialiser le champ username
        setInfoError(""); // Réinitialiser le message d'erreur

        alert('Pseudo mis à jour avec succès !');
      }
    } catch (error) {
      alert("Erreur lors de la mise à jour de l'username :" + error.message);
      setInfoError("Une erreur s'est produite lors de la mise à jour des informations utilisateur.")
    };
  };

  const handleCloseModal = () => {
    modalOnClick(false);
  }

  //affichage(render)
  return (
    <article className="modal__content">
      <h2>Edit user info</h2>

      <form onSubmit={handleSubmit}>
        <div className="modal__content--wrapper">
          <div className="modal__content--wrapper-input">
            <label htmlFor="username">User name :</label>
            <input id="username" type="text" name="username" value={editUsername} onChange={(e) => setEditUsername(e.target.value)}/>
          </div>

          <div className="modal__content--wrapper-input">
            <label htmlFor="firstname">Fist name :</label>
            <input type="text" name="firstname" value={profileUserData ? profileUserData.firstName : ""} disabled="disabled" />
          </div>

          <div className="modal__content--wrapper-input">
            <label htmlFor="lastname">Last name :</label>
            <input type="text" name="lastname" value={profileUserData ? profileUserData.lastName : ""} disabled="disabled" />
          </div>

          <div className="error-message">{infoError}</div>
        </div>
  
        <div className="modal__content--buttons">
          <button type="submit" className="modal__content--buttons__save-btn">Save</button>
          <button onClick={handleCloseModal} type="button" className="modal__content--buttons__cancel-btn">Cancel</button>
        </div>
      </form>
    </article>
  );
}