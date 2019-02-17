jest.mock('redux', () => ({
    createStore: reducers => reducers,
    combineReducers: reducers => reducers,
}));
import store from '../store';
import player from '../../player/redux/player';

describe('redux store', () => {
    it('creates a valid store with player reducer', () => {
        expect(store).toEqual({
            player,
        });
    });
});