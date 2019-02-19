import NameContainer, { mapStateToProps } from '../NameContainer';
import { getPlayerName } from '../player';
import FieldShow from '../../components/FieldShow';
jest.mock('../player.js');
jest.mock('react-redux');

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
            mapStateToProps: mapStateToProps,
            mapDispatchToProps: undefined,
            component: FieldShow
        });
    });
});
