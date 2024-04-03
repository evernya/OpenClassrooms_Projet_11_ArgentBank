//IMPORT
import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { hostName } from './api';


//Fonction thunk pour récupérer le profil utilisateur
export const profileUser = createAsyncThunk(
  "user/profile",

  //2nd
  async (getToken, thunkAPI) => {
    try{
      const response = await axios.post(`${hostName}/user/profile`, {}, {
        headers: {
          Authorization: `Bearer ${getToken}`
        }
      });

      return response.data.body;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.body);
    }
  }
);

//Slice pour gérer le profil d'utilisateur
const profileSlice = createSlice({
  name : 'profile',
  initialState: {
    user: null,
    profile: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(profileUser.pending, (state) => {
      state.user = null;
      state.loading = true;
      state.error = null;
    })
    .addCase(profileUser.fulfilled, (state, action) => {
      state.user = action.payload; //stock les donneés du profile dans redux
      state.loading = false;
      state.error = null;
    })
    .addCase(profileUser.rejected, (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    });
  }
})

export default profileSlice.reducer;
