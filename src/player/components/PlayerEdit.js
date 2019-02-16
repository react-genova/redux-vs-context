import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PlayerEdit = ({ className, name, surname, onNameChanged, onSurnameChanged }) => {
    console.log('render PlayerEdit', name, surname);
    const onNameChangedCallback = useCallback(e => onNameChanged(e.target.value, e), onNameChanged);
    const onSurnameChangedCallback = useCallback(e => onSurnameChanged(e.target.value, e), onSurnameChanged);
    return (
        <div className={className}>
            <span className="player-label">{"Name"}</span>
            <input className="player-value" onChange={onNameChangedCallback} value={name} />
            <span className="player-label">{"Surname"}</span>
            <input className="player-value" onChange={onSurnameChangedCallback} value={surname} />
        </div>
    );
};

PlayerEdit.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    onNameChanged: PropTypes.func.isRequired,
    onSurnameChanged: PropTypes.func.isRequired,
};

const PlayerEditStyled = styled(PlayerEdit)`
    margin: 5px;
    border: 1px solid #FFF;
    background-color: #EEE;
    display: flex;
    align-items: center;
    .player-label {
        padding: 20px;
    }
    .player-value {
        padding: 5px;
        width: 100px;
    }
`;

export default PlayerEditStyled;
