//we have to load the store centre
const store = require("./app/store");
//we have to load the cakeActions in order to perform reducers
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions = require("./features/icecream/iceCreamSlice").iceCreamActions;

/*State Management and Prediction for Cakes Slicer */
//console.log("Initial cake available at the moment is :");
//console.log(store.getState().cake.numOfCakes);
//console.log("Ordering 5 cakes");
store.dispatch(cakeActions.cake_ordered(5));
//console.log(store.getState().cake.numOfCakes);
//console.log("Restocking 10 cakes");
store.dispatch(cakeActions.cake_restocked(10));
//console.log(store.getState().cake.numOfCakes);

/*State Management and Prediction for IceCream Slicer */
//console.log("Initial IceCream available at the moment is :");
//console.log(store.getState().icecream.numOficeCreams);
//console.log("Ordering 15 icecreams");
store.dispatch(iceCreamActions.icecream_ordered(15));
//console.log(store.getState().icecream.numOficeCreams);
//console.log("Restocking 5 iceCreams back");
store.dispatch(iceCreamActions.icecream_restocked(5));
//console.log(store.getState().icecream.numOficeCreams);

