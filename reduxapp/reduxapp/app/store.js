const configStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icecream/iceCreamSlice");
const logger = require('redux-logger').createLogger();
const store = configStore({
    reducer:{
        cake:cakeReducer,
        icecream:iceCreamReducer
    },
    //we just need to inject this as a middleware Object to see all state changes.
    middleware:(getDefaultMiddleWare)=>{
          return getDefaultMiddleWare().concat(logger);
    }
});


module.exports = store;

console.log("Store is created with cakeSlice");
