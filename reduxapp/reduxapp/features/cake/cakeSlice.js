//Create Slice Object
const createSlice = require('@reduxjs/toolkit').createSlice;

//Provide initialState of Cakes available at the moment.
const initialState = {
    numOfCakes:20
};

const cakeSlice = createSlice({
  name:'cake',
  initialState,
  reducers:{
    cake_ordered:(state,action)=>{
        state.numOfCakes-=action.payload; 
    },
    cake_restocked:(state,action)=>{
        state.numOfCakes+=action.payload; 
    }
  }  
});

//We have to 2 share 2 things
//1. reducer function which will access current state.
//2. custom actions which called against the reducer.
module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;

console.log("cakeSlicer is ready for predicting state");

