import React from 'react';
import { render } from 'react-testing-library';
import NameContainer from '../NameContainer';
import Context, { noop } from '../Context';

jest.mock('../../components/FieldShow', () => ({
    __esModule: true,
    default: ({ value, label }) => (
        <div>
            <div data-testid="name">{value}</div>
            <div data-testid="label">{label}</div>
        </div>
    )
}));

describe('NameContainer consumer container', () => {
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
                <NameContainer />
            </Context.Provider>
        ));
        expect(container.firstChild).toMatchSnapshot();
        expect(getByTestId('name').textContent).toBe('Paolo');
        expect(getByTestId('label').textContent).toBe('Name');
    });
});
