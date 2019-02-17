jest.mock('../player.js');
jest.mock('react-redux', () => ({ connect: mapper => component => ({ mapper, component })}));
import NameContainer, { mapStateToProps } from '../NameContainer';
import { getPlayerName } from '../player';
import { connect } from 'react-redux';
import FieldShow from '../../components/FieldShow';

describe('redux NameContainer', () => {
    it('selects right props from full state', () => {
        const STATE = {};
        getPlayerName.mockImplementation(() => 'Matteo');
        const props = mapStateToProps(STATE);
        expect(getPlayerName).toHaveBeenCalledTimes(1);
        expect(getPlayerName).toHaveBeenCalledWith(STATE);
        expect(props).toEqual({ value: 'Matteo', label: 'Name' });
    });

    it('connects to redux properly', () => {
        expect(NameContainer).toEqual({
            mapper: mapStateToProps,
            component: FieldShow,
        });
    });
});