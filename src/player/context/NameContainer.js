import React, { memo } from 'react';
import FieldShow from '../components/FieldShow';
import Context from './Context';

const PureFieldShow = memo(FieldShow);

const NameContainer = () => (
    <Context.Consumer>
    {({ name }) => <PureFieldShow value={name} label="Name" />}
    </Context.Consumer>
);

export default NameContainer;
