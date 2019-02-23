import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import PlayerContainer from '../PlayerContainer';
import Context from '../Context';

jest.mock('../../components/PlayerEdit', () => ({
    __esModule: true,
    default: ({ name, surname, onNameChanged, onSurnameChanged }) => (
        <div>
            <div data-testid="name" onClick={() => onNameChanged(name)}>{name}</div>
            <div data-testid="surname" onClick={() => onSurnameChanged(surname)}>{surname}</div>
        </div>
    )
}));

describe('PlayerContainer consumer container', () => {
    it('renders without crashing and passes values down to its child', () => {
        const onNameChanged = jest.fn();
        const onSurnameChanged = jest.fn();
        const { getByTestId, container } = render((
            <Context.Provider
                value={{
                    name: 'Dino',
                    surname: 'Zoff',
                    onNameChanged,
                    onSurnameChanged,
                }}
            >
                <PlayerContainer />
            </Context.Provider>
        ));
        expect(container.firstChild).toMatchSnapshot();
        expect(getByTestId('name').textContent).toBe('Dino');
        expect(getByTestId('surname').textContent).toBe('Zoff');
        fireEvent.click(getByTestId('name'));
        fireEvent.click(getByTestId('surname'));
        expect(onNameChanged).toHaveBeenCalledTimes(1);
        expect(onNameChanged).toHaveBeenCalledWith('Dino');
        expect(onSurnameChanged).toHaveBeenCalledTimes(1);
        expect(onSurnameChanged).toHaveBeenCalledWith('Zoff');
    });
});
