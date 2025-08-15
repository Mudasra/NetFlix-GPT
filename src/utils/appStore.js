import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlics";

const appStore = configureStore({
    reducer : {},
})

export default appStore;