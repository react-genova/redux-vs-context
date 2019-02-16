import React, { memo } from 'react';
import FieldShow from '../components/FieldShow';
import Context from './Context';

const PureFieldShow = memo(FieldShow);

const SurnameContainer = () => (
    <Context.Consumer>
    {({ surname }) => <PureFieldShow value={surname} label="Surname" />}
    </Context.Consumer>
);

export default SurnameContainer;
