import React from "react";
import styled from "styled-components";
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
            <h1 className="header">CONTEXT</h1>
            <AppContext>
                <PlayerContainerContext />
                <NameContainerContext />
                <SurnameContainerContext />
            </AppContext>
        </div>
        <div className="AppRedux">
            <h1 className="header">REDUX</h1>
            <AppRedux>
                <PlayerContainerRedux />
                <NameContainerRedux />
                <SurnameContainerRedux />
            </AppRedux>
        </div>
    </div>
);

const AppStyled = styled(App)`
    display: flex;
    .header {
        text-align: center;
        color: #AFA;
    }    
    .AppContext {
        padding: 10px;
        display: flex;
        flex-direction: column;
        flex: 1;
        background-color: cadetblue;
    }
    .AppRedux {
        padding: 10px;
        display: flex;
        flex-direction: column;
        flex: 1;
        background-color: darkcyan;
    }
`;

export default AppStyled;
