import React from 'react';
import PlayerEdit from '../PlayerEdit';
import { fireEvent, render } from 'react-testing-library';
import 'jest-styled-components';

describe('PlayerEdit component', () => {
    it('renders without crashing', () => {
        const onNameChanged = jest.fn();
        const onSurnnameChanged = jest.fn();
        const { container } = render(
            <PlayerEdit
                name="Paolino"
                surname="Paperino"
                onNameChanged={onNameChanged}
                onSurnameChanged={onSurnnameChanged}
            />
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it('calls correct callbacks on editing', () => {
        const onNameChanged = jest.fn();
        const onSurnameChanged = jest.fn();
        const { container } = render(
            <PlayerEdit
                name="Paolino"
                surname="Paperino"
                onNameChanged={onNameChanged}
                onSurnameChanged={onSurnameChanged}
            />
        );
        const fakeEvent = { target: { value: 'fake' } };
        const nameElement = container.querySelector('.player-name');
        fireEvent.change(nameElement, fakeEvent);
        expect(onNameChanged).toHaveBeenCalledTimes(1);

        const surnameElement = container.querySelector('.player-surname');
        fireEvent.change(surnameElement, fakeEvent);
        expect(onSurnameChanged).toHaveBeenCalledTimes(1);
    });
});
