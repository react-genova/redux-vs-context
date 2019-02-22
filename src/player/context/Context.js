import { createContext } from 'react';
import { createSelector } from 'reselect';

export const noop = () => null;

const PlayerContext = createContext({
    name: '',
    surname: '',
    onNameChanged: noop,
    onSurnameChanged: noop
});

const getPlayer = value => value;
export const getPlayerName = createSelector(
    getPlayer,
    player => player.name
);
export const getPlayerSurname = createSelector(
    getPlayer,
    player => player.surname
);
export const getPlayerNameChangedCallback = createSelector(
    getPlayer,
    player => player.onNameChanged
);
export const getPlayerSurnameChangedCallback = createSelector(
    getPlayer,
    player => player.onSurnameChanged
);

export default PlayerContext;
