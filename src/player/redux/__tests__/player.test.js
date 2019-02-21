import reducer, {
    EDIT_PLAYER_NAME,
    EDIT_PLAYER_SURNAME,
    editPlayerName,
    editPlayerSurname,
    getPlayerName,
    getPlayerSurname
} from '../player';

describe('redux player reducer', () => {
    const PLAYER_STATE = { name: 'Paolo', surname: 'Rossi' };
    const STATE = { player: PLAYER_STATE };

    it('has unique and not empty action constants', () => {
        expect(EDIT_PLAYER_NAME).not.toBe(EDIT_PLAYER_SURNAME);
        expect(EDIT_PLAYER_NAME).toBeTruthy();
        expect(EDIT_PLAYER_SURNAME).toBeTruthy();
    });

    it('exports a valid editPlayerName action creator', () => {
        expect(editPlayerName('Paolo')).toEqual({
            type: EDIT_PLAYER_NAME,
            payload: {
                name: 'Paolo'
            }
        });
    });

    it('exports a valid editPlayerSurname action creator', () => {
        expect(editPlayerSurname('Rossi')).toEqual({
            type: EDIT_PLAYER_SURNAME,
            payload: {
                surname: 'Rossi'
            }
        });
    });

    it('selects all its fields using selectors', () => {
        expect(getPlayerName(STATE)).toBe('Paolo');
        expect(getPlayerSurname(STATE)).toBe('Rossi');
    });

    it('creates a valid initial empty state', () => {
        expect(reducer()).toEqual({ name: '', surname: '' });
    });

    it('does not mutate before state during reduction', () => {
        Object.freeze(PLAYER_STATE);
        reducer(PLAYER_STATE, editPlayerName('Freddie'));
        reducer(PLAYER_STATE, editPlayerSurname('Mercury'));
    });

    it('reduces an unknown action', () => {
        expect(reducer(PLAYER_STATE, { type: 'UNKNOWN' })).toBe(PLAYER_STATE);
    });

    it('reduces an EDIT_PLAYER_NAME action', () => {
        expect(reducer(PLAYER_STATE, editPlayerName('Freddie'))).toEqual({
            name: 'Freddie',
            surname: 'Rossi'
        });
    });

    it('reduces an EDIT_PLAYER_SURNAME action', () => {
        expect(reducer(PLAYER_STATE, editPlayerSurname('Mercury'))).toEqual({
            name: 'Paolo',
            surname: 'Mercury'
        });
    });
});
