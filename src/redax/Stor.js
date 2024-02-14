import { configureStore } from "@reduxjs/toolkit";
import PizzaSlice from "./slice/PizzaSlice";
import FiltreSlice from "./slice/FiltreSlice";
import CartSlice from "./slice/CartSlice";
export const store =configureStore({
    reducer:{
        slicepizza: PizzaSlice,
        filtre:FiltreSlice,
        cart:CartSlice
    }
})

