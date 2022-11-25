import React from 'react';
import {Flex} from "../../common-components/Flex";
import {ArrowBack} from "../../assets/icons/ArrowBack";
import {useNavigate} from "react-router-dom";

export const BackToTestChoice = () => {

    const navigate = useNavigate()

    const backToStartPage = () => {
        navigate("/")
    }

    return (
        <div onClick={backToStartPage}>
            <Flex direction={"row"} position={"top-left"} align={"center"} gap={"12px"} padding={"30px 0"}>
                <ArrowBack size={"18px"}
                           color={"black"}
                />
                <span style={{cursor: "pointer"}}>Назад к выбору теста</span>
            </Flex>
        </div>

    );
};

