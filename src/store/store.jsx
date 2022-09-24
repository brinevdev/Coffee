import { configureStore } from "@reduxjs/toolkit";
import reducer from "../components/coffeeSlice/coffeeSlice";




const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
})


export default store;