import React, { Fragment } from 'react';
import { render, fireEvent } from 'react-testing-library';
import AppContext from '../AppContext';
import Context from '../../player/context/Context';

const toEvent = value => ({ target: { value } });

describe('AppContext provider component', () => {
    it('provides an empty value at startup and reacts to changes', () => {
        const { container, getByTestId } = render(
            <AppContext>
                <Context.Consumer>
                    {({ name, surname, onNameChanged, onSurnameChanged }) => (
                        <Fragment>
                            <input
                                data-testid="name"
                                onChange={({ target: { value } }) =>
                                    onNameChanged(value)
                                }
                                value={name}
                            />
                            <input
                                data-testid="surname"
                                onChange={({ target: { value } }) =>
                                    onSurnameChanged(value)
                                }
                                value={surname}
                            />
                        </Fragment>
                    )}
                </Context.Consumer>
            </AppContext>
        );
        // check snapshot
        expect(container).toMatchSnapshot();
        // retrieves rendered components
        const name = getByTestId('name');
        const surname = getByTestId('surname');
        // expect values to be empty at startup
        expect(name.value).toBe('');
        expect(surname.value).toBe('');
        // simulate a change on name
        fireEvent.change(name, toEvent('Paolino'));
        // expect name to be changed and surname not
        expect(name.value).toBe('Paolino');
        expect(surname.value).toBe('');
        // simulate a change on surname
        fireEvent.change(surname, toEvent('Paperino'));
        // expect surname to be changed and name not
        expect(name.value).toBe('Paolino');
        expect(surname.value).toBe('Paperino');
    });
});
