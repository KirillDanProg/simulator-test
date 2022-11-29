import React from 'react';
import {Flex} from "../../common-components";
import {ArrowBack} from "../../assets/icons/ArrowBack";
import {useNavigate} from "react-router-dom";
import {Wrapper} from "../../common-components/Wrapper";

export const BackToTestChoice = () => {

    const navigate = useNavigate()

    const backToStartPage = (): void => navigate("/")

    return (
        <Wrapper callback={backToStartPage}>
            <Flex direction="row"
                  position="top-left"
                  align="center"
                  gap="12px"
                  padding="30px 0"
            >
                <ArrowBack size="18px"
                           color="black"
                />
                <span style={{cursor: "pointer"}}>Назад к выбору теста</span>
            </Flex>
        </Wrapper>
    );
};
