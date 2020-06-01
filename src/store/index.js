import { createStore } from 'redux';
import reducer from '../reducers';
const initialState = { tech: "React " };
export const store = createStore(reducer, initialState); // reducer is the mandatory argument
// reducer always talks to the store, store needs to be invoked with a reducer
// like Array.reduce(), createStore() responsible for passing the args into the reducer
// reducer has state and action arguments