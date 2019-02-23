import React from 'react';
import { render } from 'react-testing-library';
import SurnameContainer from '../SurnameContainer';
import Context, { noop } from '../Context';

jest.mock('../../components/FieldShow', () => ({
    __esModule: true,
    default: ({ value, label }) => (
        <div>
            <div data-testid="surname">{value}</div>
            <div data-testid="label">{label}</div>
        </div>
    )
}));

describe('SurnameContainer consumer container', () => {
    it('renders without crashing and passes values down to its child', () => {
        const { getByTestId, container } = render((
            <Context.Provider
                value={{
                    name: 'Paolo',
                    surname: 'Rossi',
                    onNameChanged: noop,
                    onSurnameChanged: noop,
                }}
            >
                <SurnameContainer />
            </Context.Provider>
        ));
        expect(container.firstChild).toMatchSnapshot();
        expect(getByTestId('surname').textContent).toBe('Rossi');
        expect(getByTestId('label').textContent).toBe('Surname');
    });
});
