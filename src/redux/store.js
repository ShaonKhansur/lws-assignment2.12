import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import flightsReducer from './fights/fightsReducer';

const store = createStore(flightsReducer, composeWithDevTools() );

export default store;


