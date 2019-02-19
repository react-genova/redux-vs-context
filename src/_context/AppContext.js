import React from 'react';
import Context from '../player/context/Context';
import { useState, useCallback } from 'react';

const AppContext = ({ children }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const onNameChanged = useCallback(name => setName(name));
    const onSurnameChanged = useCallback(surname => setSurname(surname));
    return (
        <Context.Provider
            value={{ name, surname, onNameChanged, onSurnameChanged }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
