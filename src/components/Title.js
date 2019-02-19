import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = ({ title, className }) => {
    console.log('render Title');
    return <h1 className={className}>{title}</h1>;
};

Title.propTypes = {
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

const TitleStyled = styled(Title)`
    text-align: center;
    margin: 10px 0 0 0;
    color: #afa;
`;

export default TitleStyled;
