import React from 'react';
import front from "../../assets/front.png"
import back from "../../assets/back.png"
import {Link} from "react-router-dom";
import {StyledStartPage} from "./StyledStartPage";
import {useAppDispatch} from "../../app/hooks";
import {Flex} from "../../common-components/Flex";
import {setTestType, TestType} from "../../features/test-simulator/app-reducer";


export const StartPage = () => {

    const dispatch = useAppDispatch()

    const onClickHandler = (type: TestType) => {
        dispatch(setTestType(type))
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

