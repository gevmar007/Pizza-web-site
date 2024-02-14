import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzaCart: [],
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: "pizaCart",
  initialState,
  reducers: {
    setPizzaButton(state, action) {
      const pizzaItem = state.pizzaCart.find(
        (Element) => Element.id === action.payload.id
      );
      if (pizzaItem) {
        pizzaItem.count++;
      } else {
        const obj = {
          ...action.payload,
          count: 1,
        };
        state.pizzaCart.push(obj);
      }

      state.totalPrice = state.pizzaCart.reduce((acum, item) => {
        return acum + item.count * item.price;
      }, 0);
    },

    incrementCount(state, action) {
      const pizzaItem = state.pizzaCart.find(
        (Element) => Element.id === action.payload.id
      );
      if (pizzaItem) {
        pizzaItem.count++;
        state.totalPrice = state.pizzaCart.reduce((accum, item) => {
          return accum + item.count * item.price;
        }, 0);
      }
    },
    
    decrementCount(state,action) {
        const pizzaItem=state.pizzaCart.find(
           (Element) => Element.id === action.payload.id
        )
        if (pizzaItem.count > 1){

            pizzaItem.count--;
            state.totalPrice=state.pizzaCart.reduce((accum,item)=>{
                return accum +item.count * item.price
            },0)
        }
    },
    removeItem(state,action){
      const pizzaItem=state.pizzaCart.filter(
        (Element)=>Element.id !== action.payload
        );
        state.pizzaCart = pizzaItem 
        
        state.totalPrice = state.pizzaCart.reduce((acum, item) => {
          return acum + item.count * item.price;
        }, 0);
    },

    Remove(state){
      state.pizzaCart=[]
      state.totalPrice=0
    
    }

     
  },
});

export const { setPizzaButton,incrementCount,decrementCount, removeItem,Remove} = CartSlice.actions;
export default CartSlice.reducer;
