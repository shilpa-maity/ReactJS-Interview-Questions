import { createSlice } from "@reduxjs/toolkit";
//define the initialState of the Cake.
const initialState = {
    numOfCakes:10
};

const cakeSlice = createSlice({
     name:'cake',
     initialState,
     reducers:{
        //reducers function
        cake_ordered:(state,action)=>{
            state.numOfCakes-= action.payload;

        },
        cake_restocked:(state,action)=>{
            state.numOfCakes+=action.payload
        }
     }
});

export default cakeSlice.reducer;
export const {cake_ordered,cake_restocked} = cakeSlice.actions;
console.log("CakeSlicer is working");