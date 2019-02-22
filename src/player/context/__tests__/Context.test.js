import {
    getPlayerName,
    getPlayerNameChangedCallback,
    getPlayerSurname,
    getPlayerSurnameChangedCallback,
    noop
} from '../Context';

describe('Context selectors', () => {
    it('exports a valid noop function', () => {
        expect(noop).toBeInstanceOf(Function);
        expect(noop()).toBeNull();
    });

    it('retrieves valid data from state', () => {
        const fakeSurnameChangedCallback = jest.fn();
        const fakeNameChangedCallback = jest.fn();
        const STATE = {
            name: 'Paolo',
            surname: 'Rossi',
            onNameChanged: fakeNameChangedCallback,
            onSurnameChanged: fakeSurnameChangedCallback
        };
        expect(getPlayerName(STATE)).toEqual('Paolo');
        expect(getPlayerSurname(STATE)).toEqual('Rossi');
        expect(getPlayerNameChangedCallback(STATE)).toBe(
            fakeNameChangedCallback
        );
        expect(getPlayerSurnameChangedCallback(STATE)).toBe(
            fakeSurnameChangedCallback
        );
    });
});
