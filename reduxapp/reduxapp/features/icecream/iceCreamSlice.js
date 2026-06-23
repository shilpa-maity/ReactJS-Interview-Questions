const { cakeActions } = require('../cake/cakeSlice');

//Create Slice Object
const createSlice = require('@reduxjs/toolkit').createSlice;

//Provide initialState of Cakes available at the moment.
const initialState = {
    numOficeCreams:30
};

const iceCreamSlice = createSlice({
  name:'icecream',
  initialState,
  reducers:{
    icecream_ordered:(state,action)=>{
        state.numOficeCreams-=action.payload; 
    },
    icecream_restocked:(state,action)=>{
        state.numOficeCreams+=action.payload; 
    }
  },
  //it will execute when each cake gets ordered then 1 icecream will be given as free.
  extraReducers:(builder)=>{
     builder.addCase(cakeActions.cake_ordered,(state,action=null)=>{
        state.numOficeCreams--;
     })
  }  
});

//We have to 2 share 2 things
//1. reducer function which will access current state.
//2. custom actions which called against the reducer.
module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;

console.log("icecream Slicer is ready for predicting state");

