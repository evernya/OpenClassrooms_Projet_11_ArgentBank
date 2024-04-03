//IMPORT
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUser } from "../../Reducers/AuthSlice";
import { profileUser } from "../../Reducers/ProfileSlice";

//CSS
import "../../Style/style.css";



export default function FormLogin() {
    //state (état, données)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [errorLoginMessage, setErrorLoginMessage] = useState("");

    //comportement
    const handleSubmit = (e) => {
        e.preventDefault();

        let userCredentials = {
            email, password,
        };

        dispatch(loginUser(userCredentials)).then((result) => {
            if (result.payload) {    
                const authToken = result.payload;

                //A VERIFIER
                dispatch(profileUser(authToken)).then((res) => {});
                console.log("Je passe.")

                navigate("/profile");
            } else {
                setErrorLoginMessage("Email ou mot de passe incorrect");
            }
        });
    }


    //affichage (render)
    return (
        <form onSubmit={handleSubmit}>
            <div className='input__wrapper'>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='input__wrapper'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className='input__remember'>
                <label htmlFor="remember-me">Remember me</label>
                <input type="checkbox" name="remember-me" id='remember-me' onChange={() => setRememberMe(!rememberMe)} checked={rememberMe} />
            </div>

            <button type='submit' className='sign-in-button'>Sign In</button>
            {errorLoginMessage && <p className="error-message">{errorLoginMessage}</p>}
        </form>
    );
};