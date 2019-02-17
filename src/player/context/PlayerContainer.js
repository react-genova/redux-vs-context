import React from 'react';
import PlayerEdit from '../components/PlayerEdit';
import Context, { getPlayerName, getPlayerNameChangedCallback, getPlayerSurname, getPlayerSurnameChangedCallback } from './Context';

const SurnameContainer = () => (
    <Context.Consumer>
    {player => <PlayerEdit
        surname={getPlayerSurname(player)}
        name={getPlayerName(player)}
        onNameChanged={getPlayerNameChangedCallback(player)}
        onSurnameChanged={getPlayerSurnameChangedCallback(player)} />}
    </Context.Consumer>
);

export default SurnameContainer;
