//IMPORT
import { useSelector } from "react-redux";
import { useState } from "react";

//COMPONENT
import ModalEditName from "./ModalEditName";

//CSS
import "../../Style/style.css"

export default function EditName() {
    //state
    const [isOpen, setIsOpen] = useState(false);

    const profileUserData = useSelector((state) => state.profile.user);

    //affichage(render)
    return (
        <div className="profile-header">
            {!isOpen ? (
                <div>
                    <h1>Welcome back<br />{`${profileUserData ? profileUserData.firstName + " " + profileUserData.lastName + " !": ""}`}</h1>
                    <button onClick={() => {setIsOpen(true)}} className="profile-header__edit-button">Edit Name</button>
                </div>
            ) : (
                <ModalEditName modalOnClick={() => {setIsOpen(false)}} />
            )}
        </div>
    );
};