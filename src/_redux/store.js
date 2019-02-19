import { createStore, combineReducers } from 'redux';
import player from '../player/redux/player';

const store = createStore(combineReducers({ player }));

export default store;
