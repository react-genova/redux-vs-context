import { connect } from 'react-redux';
import FieldShow from '../components/FieldShow';
import { getPlayerName } from './player';

export const mapStateToProps = state => ({ value: getPlayerName(state), label: 'Name' });

const NameContainer = connect(mapStateToProps)(FieldShow);

export default NameContainer;
