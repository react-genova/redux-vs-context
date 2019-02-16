import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FieldShow = ({ label, value, className }) => {
    console.log('render FieldShow', label, value);
    return <span className={className}>{`${label}: ${value}`}</span>;
};

FieldShow.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

const FieldShowStyled = styled(FieldShow)`
    margin: 5px;
    border: 1px solid green;
    background-color: #AFA;
    padding: 10px;
`;

export default FieldShowStyled;
