//IMPORT
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Reducers/AuthSlice";
import { profileUser } from "../Reducers/ProfileSlice";

//ASSET
import logo from "../Assets/argentBankLogo.png";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

//CSS
import '../Style/style.css';



export default function Header() {
    //state
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const authToken = useSelector((state) => state.auth.token);
    const profileUserData = useSelector((state) => state.profile.user);

    //comportement
    useEffect(() => {
        if (authToken) {
            dispatch(profileUser(authToken));
        }
    }, [dispatch, authToken]);

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logoutUser());
        navigate("/");
        dispatch(profileUser.pending());
    }

    //affichage (render)
    return (
        <nav className="main-nav nav-logged-container">
            <Link className="main-nav__logo" to={"/"}>
                <img className="main-nav__logo--image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>

            {authToken ? (
                <div className="main-nav__item-container">
                    <div className="main-nav__item">
                    <Link to={"/profile"} className="main-nav__item--info-user">
                        <FontAwesomeIcon icon={faCircleUser} className="main-nav__item--icon" />
                        <p>{profileUserData ? profileUserData.userName + " " : ""}</p>
                    </Link>
                    </div>
                    <div className="main-nav__item">
                        <Link onClick={handleLogout} to={"/"}><FontAwesomeIcon icon={faRightFromBracket} className="main-nav__item--icon" />Sign Out</Link>
                    </div>
                </div>
            ) : (
                <div className="main-nav__item">
                    <Link to={"/login"}><FontAwesomeIcon icon={faCircleUser} className="main-nav__item--icon" />Sign In</Link>
                </div>
            )}
        </nav>
    );
};