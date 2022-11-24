import React from 'react';
import {Flex} from "../../common-components/Flex";
import {ArrowBack} from "../../assets/icons/ArrowBack";

export const BackToTestChoice = () => {
    return (
        <Flex align={"center"} gap={"12px"}>
            <ArrowBack size={"18px"}
                       color={"black"}
            />
            <span>Назад к выбору теста</span>
        </Flex>
    );
};

