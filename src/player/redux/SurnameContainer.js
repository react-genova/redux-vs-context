import { connect } from 'react-redux';
import FieldShow from '../components/FieldShow';
import { getPlayerSurname } from './player';

export const mapStateToProps = state => ({
    value: getPlayerSurname(state),
    label: 'Surname'
});

const SurnameContainer = connect(mapStateToProps)(FieldShow);

export default SurnameContainer;
