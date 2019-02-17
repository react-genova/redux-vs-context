jest.mock('../player.js');
jest.mock('react-redux', () => ({ connect: mapper => component => ({ mapper, component })}));
import SurnameContainer, { mapStateToProps } from '../SurnameContainer';
import { getPlayerSurname } from '../player';
import { connect } from 'react-redux';
import FieldShow from '../../components/FieldShow';

describe('redux SurnameContainer', () => {
    it('selects right props from full state', () => {
        const STATE = {};
        getPlayerSurname.mockImplementation(() => 'Campodonico');
        const props = mapStateToProps(STATE);
        expect(getPlayerSurname).toHaveBeenCalledTimes(1);
        expect(getPlayerSurname).toHaveBeenCalledWith(STATE);
        expect(props).toEqual({ value: 'Campodonico', label: 'Surname' });
    });

    it('connects to redux properly', () => {
        expect(SurnameContainer).toEqual({
            mapper: mapStateToProps,
            component: FieldShow,
        });
    });
});