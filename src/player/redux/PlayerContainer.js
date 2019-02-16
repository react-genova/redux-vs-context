import { connect } from 'react-redux';
import PlayerEdit from '../components/PlayerEdit';
import { getPlayerName, getPlayerSurname, editPlayerName, editPlayerSurname } from './player';

const mapStateToProps = state => ({
    name: getPlayerName(state),
    surname: getPlayerSurname(state),
});

const mapDispatchToProps = {
    onNameChanged: editPlayerName,
    onSurnameChanged: editPlayerSurname,
};

const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(PlayerEdit);

export default PlayerContainer;
