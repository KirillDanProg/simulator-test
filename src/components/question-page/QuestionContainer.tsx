import React, {useState} from 'react';
import {BackToTestChoice} from "./BackToTestChoice";
import {AnswerVariant} from "./PossibleAnswer";
import {Container} from "../../common-components/Container";
import {Button} from "../../common-components/Button";
import { Stepper} from "./ProgressBar";

const QuestionContainer = () => {
    const [cur, setCur] = useState(0)

    return (
        <Container width={"756px"}>
            <div>

                <BackToTestChoice/>

                <div>
                    Как можно добавить элемент в начало массива?
                </div>

                <AnswerVariant id={1} cur={cur} setCur={setCur}/>
                <AnswerVariant id={2} cur={cur} setCur={setCur}/>
                <AnswerVariant id={3} cur={cur} setCur={setCur}/>
                <AnswerVariant id={4} cur={cur} setCur={setCur}/>

                <Stepper/>

                <Button padding={"6px 18px"}
                    variant={"outlined"}>Пропустить вопрос</Button>
                <Button padding={"6px 18px"}
                    variant={"contained"}>Ответить</Button>
            </div>
        </Container>

    );
};


export default QuestionContainer;