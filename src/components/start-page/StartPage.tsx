import React from 'react';
import front from "../../assets/front.png"
import back from "../../assets/back.png"
import {Link} from "react-router-dom";
import {StyledStartPage} from "./StyledStartPage";
import {useAppDispatch} from "../../app/hooks";
import {setTestType, TestType} from "../../features/test-simulator/app-reducer";
import {Flex, Title} from "../../common-components";
import {Wrapper} from "../../common-components/Wrapper";


export const StartPage = () => {

    const dispatch = useAppDispatch()

    const onClickHandler = (type: TestType) => dispatch(setTestType(type))


    return (
        <StyledStartPage>
            <Title value="Выбери направление"
                   className="start-page-title"
            />
            <Flex direction={"column"} padding={"100px 0"}
                  gap={"60px"}
            >
                <Wrapper className={"imgContainer"}
                         callback={() => onClickHandler("front")}>
                    <Link to={"test"}>
                        <img className={"img"}
                             src={front}
                             alt={"Front-end"}
                        />

                    </Link>
                </Wrapper>

                <Wrapper className={"imgContainer"}
                         callback={() => onClickHandler("back")}>
                    <Link to={"test"}>
                        <img className={"img"}
                             src={back}
                             alt={"Back-end"}
                        />
                    </Link>
                </Wrapper>

            </Flex>


        </StyledStartPage>
    );
};

