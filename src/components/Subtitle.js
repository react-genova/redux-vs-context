import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Subtitle = ({ subtitle, className }) => {
    console.log("render Subtitle");
    return <h2 className={className}>{subtitle}</h2>;
};

Subtitle.propTypes = {
    className: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};

const SubtitleStyled = styled(Subtitle)`
    margin: 0 10px;
    text-align: left;
    text-transform: capitalize;
    color: #8d8;
`;

export default SubtitleStyled;
