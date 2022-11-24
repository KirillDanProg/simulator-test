import React from 'react';
import front from "../../assets/front.png"
import back from "../../assets/back.png"
import {Link} from "react-router-dom";
import {StyledStartPage} from "./StyledStartPage";


export const StartPage = () => {
    return (
        <StyledStartPage>
            <h1>Выбери направление</h1>
            <Link to={"test"}>
                <img className={"img"}
                     src={front}/>
            </Link>

            <Link to={"test"}>
                <img className={"img"}
                     src={back}/>
            </Link>

        </StyledStartPage>
    );
};

