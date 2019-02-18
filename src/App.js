import React from "react";
import styled from "styled-components";
// Common
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
// Context
import AppContext from "./_context/AppContext";
import PlayerContainerContext from "./player/context/PlayerContainer";
import NameContainerContext from "./player/context/NameContainer";
import SurnameContainerContext from "./player/context/SurnameContainer";
// Redux
import AppRedux from "./_redux/AppRedux";
import PlayerContainerRedux from "./player/redux/PlayerContainer";
import NameContainerRedux from "./player/redux/NameContainer";
import SurnameContainerRedux from "./player/redux/SurnameContainer";

const App = ({ className }) => (
    <div className={className}>
        <div className="AppContext">
            <Title title="Context" />
            <AppContext>
                <Subtitle subtitle="Player" />
                <PlayerContainerContext />
                <NameContainerContext />
                <SurnameContainerContext />
            </AppContext>
        </div>
        <div className="AppRedux">
            <Title title="Redux" />
            <AppRedux>
                <Subtitle subtitle="Player" />
                <PlayerContainerRedux />
                <NameContainerRedux />
                <SurnameContainerRedux />
            </AppRedux>
        </div>
    </div>
);

const AppStyled = styled(App)`
    display: flex;
    .AppContext {
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        flex: 1;
        background-color: cadetblue;
    }
    .AppRedux {
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        flex: 1;
        background-color: darkcyan;
    }
`;

export default AppStyled;
