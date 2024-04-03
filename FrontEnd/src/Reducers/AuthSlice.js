//IMPORT
import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { hostName } from './api';


//Créer une fonction thunk asynchrone pour la connexion
export const loginUser = createAsyncThunk (
    //1st arguement : string
    'auth/loginUser',

    //2nd argument : fonction fléchée async
    async (userCredentials, thunkAPI) => {
        try {
            //Appeler l'API
            const response = await axios.post(`${hostName}/user/login`, userCredentials);

            // récupération du token à partir de la réponse de l'API + dans le local storage
            const authToken = response.data.body.token; 
            localStorage.setItem('authToken', JSON.stringify(response));

            //retourner le token d'auth dans le state redux
            return authToken;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.body);
        }
    }
);

//Créer une fonction thunk async pour la déconnexion
export const logoutUser = () => (dispatch) => {
    //déclenchement d'une action Redux pour déconnecter l'utilisateur
    dispatch(authSlice.actions.logoutSuccess());
}

//Création d'un slice pour gérer l'authentification
const authSlice = createSlice({
    //1st key : nom du slice
    name : 'auth',
    //2nd key : définition du state
    initialState: {
        token: null, //token d'auth inital est null car l'utilisateur n'est pas encore connecté
        loading: false,
        error: null,
        user: null,
    },
    //3rd key : définitions de reducers
    reducers: {
        logoutSuccess: (state) => {
            state.token = null; // réinitialiser le token d'auth à null
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        //gérer le chargement après avoir initié une connexion
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        //gérer le chargement et le stockage du token d'auth après une connexion réussie
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload;
            state.loading = false;
            state.error = null;
        });
        //gérer les erreurs lors de la connexion
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});


//Exporter les actions et le reducer pour l'auth
export const authActions = { loginUser, logoutUser };
export default authSlice.reducer;