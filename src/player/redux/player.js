import { createSelector } from 'reselect';

// action types
export const EDIT_PLAYER_NAME = 'rvc/EDIT_PLAYER_NAME@player';
export const EDIT_PLAYER_SURNAME = 'rvc/EDIT_PLAYER_SURNAME@player';

// action creators
export const editPlayerName = name => ({ type: EDIT_PLAYER_NAME, payload: { name }});
export const editPlayerSurname = surname => ({ type: EDIT_PLAYER_SURNAME, payload: { surname }});

// selectors
const getPlayer = state => state.player;
export const getPlayerName = createSelector(getPlayer, player => player.name);
export const getPlayerSurname = createSelector(getPlayer, player => player.surname);

// reducer
const reducers = {
    [EDIT_PLAYER_NAME]: (state, { payload: { name }}) => ({ ...state, name }),
    [EDIT_PLAYER_SURNAME]: (state, { payload: { surname }}) => ({ ...state, surname }),
};
const identity = state => state;
const player = (state = { name: '', surname: ''}, action = {}) => (reducers[action.type] || identity)(state, action); 

export default player;
