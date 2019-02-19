import store from '../store';
import player from '../../player/redux/player';
jest.mock('redux', () => ({
    createStore: reducers => reducers,
    combineReducers: reducers => reducers
}));

describe('redux store', () => {
    it('creates a valid store with player reducer', () => {
        expect(store).toEqual({
            player
        });
    });
});
