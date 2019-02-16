import React from 'react';
import PlayerEdit from '../components/PlayerEdit';
import Context from './Context';

const SurnameContainer = () => (
    <Context.Consumer>
    {({
        name,
        surname,
        onNameChanged,
        onSurnameChanged
    }) => <PlayerEdit surname={surname} name={name} onNameChanged={onNameChanged} onSurnameChanged={onSurnameChanged} />}
    </Context.Consumer>
);

export default SurnameContainer;
