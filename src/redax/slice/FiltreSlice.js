import { createSlice } from "@reduxjs/toolkit";





const initialState={
    activCategory: 0,
    sort: { 
        type: "популярности(2-1)",
        sortProperty: "asc",
    },
    filter:'',
    pageCount: 1,
    
}

const FiltreSlice=createSlice({
    name:'filtre',
    initialState,
    reducers:{
        setActivCategori(state,action){
           
            return{
                ...state,
                activCategory:action.payload
            }
        },

        setOptionClicke(state,action){
            return{
                    ...state,
            sort:action.payload
            }
        
        },
        
        setFilter(state,action){
       
         return{
            ...state,
            filter:action.payload
         }
        },

        setPageCount(state,action){
         
            return{
                ...state,
                pageCount:action.payload

            }
        }
    },
    
   
})
export const {setActivCategori,setOptionClicke,setFilter,setPageCount,api}=FiltreSlice.actions

export default FiltreSlice.reducer