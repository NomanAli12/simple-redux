// import { createStore } from 'redux';
import { createSlice , configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showUser: true }

const counterSlice = createSlice({
    name: 'counter',            // here it can be any name of your choice
    initialState: initialCounterState,
    reducers: {
        inrement(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
         },
        increase(state,action) {
            state.counter = state.counter + action.payload;
         },
        toggleCounter(state) {
           state.showUser = !state.showUser 
         },
    }
})

// this is the other way of using redux  without redux toolkit
//===================================================================
// const reducerCounter = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showUser: state.showUser
//         }
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showUser: state.showUser
//         }
//     }
//     if (action.type === 'increaseByPayload') {
//         return {
//             counter: state.counter + action.amount,
//             showUser: state.showUser
//         }
//     }
//     if (action.type === 'toggle') {
//         return {
//             showUser: !state.showUser,
//             counter: state.counter
//         }
//     }
//     return state;
// }
// const store = createStore(reducerCounter) // ths can have only one reducer thats why we are using configureStore to have multiple reducer
  const initailAuthState = { isAuthentication: false}
 const authSlice =  createSlice({
   name: 'authentication',
   initialState: initailAuthState,
   reducers:{
       login(state){
           state.isAuthentication = true;
       },
       logout(state){
           state.isAuthentication = false;
       },
   }
 })
  
 const store = configureStore({
     reducer:{counter: counterSlice.reducer , auth: authSlice.reducer}
 })
 export const counterActions = counterSlice.actions;
 export const authActions = authSlice.actions;

export default store;