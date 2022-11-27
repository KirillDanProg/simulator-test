import React from 'react';
import front from "../../assets/front.png"
import back from "../../assets/back.png"
import {Link} from "react-router-dom";
import {StyledStartPage} from "./StyledStartPage";
import {useAppDispatch} from "../../app/hooks";
import {setTestType, TestType} from "../../features/test-simulator/app-reducer";
import {Flex} from "../../common-components";


export const StartPage = () => {

    const dispatch = useAppDispatch()

    const onClickHandler = (type: TestType) => {
        dispatch(setTestType(type))
    }

    return (
        <StyledStartPage>

            <h1>Выбери направление</h1>
            <Flex direction={"column"} padding={"100px 0"}
                  gap={"60px"}
            >
                <div className={"imgContainer"} onClick={() => onClickHandler("front")}>
                    <Link to={"test"}>
                        <img className={"img"}
                             src={front}
                             alt={"Front-end"}
                        />

                    </Link>
                </div>

                <div className={"imgContainer"} onClick={() => onClickHandler("back")}>
                    <Link to={"test"}>
                        <img className={"img"}
                             src={back}
                             alt={"Back-end"}
                        />
                    </Link>
                </div>

            </Flex>


        </StyledStartPage>
    );
};

