import React, { memo } from 'react';
import FieldShow from '../components/FieldShow';
import Context, { getPlayerSurname } from './Context';

const PureFieldShow = memo(FieldShow);

const SurnameContainer = () => (
    <Context.Consumer>
        {player => (
            <PureFieldShow value={getPlayerSurname(player)} label="Surname" />
        )}
    </Context.Consumer>
);

export default SurnameContainer;
