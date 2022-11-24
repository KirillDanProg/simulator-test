import React from 'react';
import front from "../../assets/front.png"
import back from "../../assets/back.png"
import {Link} from "react-router-dom";
import {StyledStartPage} from "./StyledStartPage";
import {useAppDispatch} from "../../app/hooks";
import {setTestType} from "../../features/test-simulator/simulator-slice";
import {Flex} from "../../common-components/Flex";


export const StartPage = () => {

    const dispatch = useAppDispatch()

    const onClickHandler = (type: "front" | "back") => {
        dispatch(setTestType({value: type}))
    }

    return (
        <StyledStartPage>

            <h1>Выбери направление</h1>
            <Flex padding={"100px 0"}
                gap={"100px"}
            >
                <Link to={"test"} onClick={() => onClickHandler("front")}>
                    <img className={"img"}
                         src={front}/>
                </Link>

                <Link to={"test"} onClick={() => onClickHandler("back")}>
                    <img className={"img"}
                         src={back}/>
                </Link>
            </Flex>


        </StyledStartPage>
    );
};

