import React, { memo } from 'react';
import FieldShow from '../components/FieldShow';
import Context, { getPlayerName } from './Context';

const PureFieldShow = memo(FieldShow);

const NameContainer = () => (
    <Context.Consumer>
    {player => <PureFieldShow value={getPlayerName(player)} label="Name" />}
    </Context.Consumer>
);

export default NameContainer;
