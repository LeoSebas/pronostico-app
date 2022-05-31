import { createSlice, configureStore } from "@reduxjs/toolkit";

// Slice for AppState 
const initialState = {
    cities: window.localStorage.getItem('cities') ?? {}
}
const appState = createSlice({
    name: "APP_STATE",
    initialState,
    reducers: {
        
    }

})

