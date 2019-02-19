import PlayerContainer, {
    mapStateToProps,
    mapDispatchToProps
} from '../PlayerContainer';
import {
    getPlayerSurname,
    getPlayerName,
    editPlayerName,
    editPlayerSurname
} from '../player';
import PlayerEdit from '../../components/PlayerEdit';
jest.mock('../player.js');
jest.mock('react-redux');

describe('redux PlayerContainer', () => {
    it('selects right props from full state', () => {
        const STATE = {};
        getPlayerName.mockImplementation(() => 'Paolino');
        getPlayerSurname.mockImplementation(() => 'Paperino');
        const props = mapStateToProps(STATE);
        expect(getPlayerSurname).toHaveBeenCalledTimes(1);
        expect(getPlayerSurname).toHaveBeenCalledWith(STATE);
        expect(getPlayerName).toHaveBeenCalledTimes(1);
        expect(getPlayerName).toHaveBeenCalledWith(STATE);
        expect(props).toEqual({
            surname: 'Paperino',
            name: 'Paolino'
        });
    });

    it('maps right actions to dispatch', () => {
        expect(mapDispatchToProps).toEqual({
            onNameChanged: editPlayerName,
            onSurnameChanged: editPlayerSurname
        });
    });

    it('connects to redux properly', () => {
        expect(PlayerContainer).toEqual({
            mapStateToProps: mapStateToProps,
            mapDispatchToProps: mapDispatchToProps,
            component: PlayerEdit
        });
    });
});
