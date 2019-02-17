jest.mock('../player.js');
jest.mock('react-redux', () => ({ connect: (mapper, dispatcher) => component => ({ dispatcher, mapper, component })}));
import PlayerContainer, { mapStateToProps, mapDispatchToProps } from '../PlayerContainer';
import { getPlayerSurname, getPlayerName, editPlayerName, editPlayerSurname } from '../player';
import { connect } from 'react-redux';
import PlayerEdit from '../../components/PlayerEdit';

describe('redux PlayerContainer', () => {
    it('selects right props from full state', () => {
        const STATE = {};
        getPlayerName.mockImplementation(() => 'Matteo');
        getPlayerSurname.mockImplementation(() => 'Campodonico');
        const props = mapStateToProps(STATE);
        expect(getPlayerSurname).toHaveBeenCalledTimes(1);
        expect(getPlayerSurname).toHaveBeenCalledWith(STATE);
        expect(getPlayerName).toHaveBeenCalledTimes(1);
        expect(getPlayerName).toHaveBeenCalledWith(STATE);
        expect(props).toEqual({
            surname: 'Campodonico',
            name: 'Matteo',
        });
    });

    it('maps right actions to dispatch', () => {
        expect(mapDispatchToProps).toEqual({
            onNameChanged: editPlayerName,
            onSurnameChanged: editPlayerSurname,
        });
    })

    it('connects to redux properly', () => {
        expect(PlayerContainer).toEqual({
            dispatcher: mapDispatchToProps,
            mapper: mapStateToProps,
            component: PlayerEdit,
        });
    });
});