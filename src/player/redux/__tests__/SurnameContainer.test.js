import SurnameContainer, { mapStateToProps } from '../SurnameContainer';
import { getPlayerSurname } from '../player';
import FieldShow from '../../components/FieldShow';
jest.mock('../player.js');
jest.mock('react-redux');

describe('redux SurnameContainer', () => {
    it('selects right props from full state', () => {
        const STATE = {};
        getPlayerSurname.mockImplementation(() => 'Paperino');
        const props = mapStateToProps(STATE);
        expect(getPlayerSurname).toHaveBeenCalledTimes(1);
        expect(getPlayerSurname).toHaveBeenCalledWith(STATE);
        expect(props).toEqual({ value: 'Paperino', label: 'Surname' });
    });

    it('connects to redux properly', () => {
        expect(SurnameContainer).toEqual({
            mapStateToProps: mapStateToProps,
            mapDispatchToProps: undefined,
            component: FieldShow
        });
    });
});
