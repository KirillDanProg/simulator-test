import React from 'react';
import {useAppSelector} from "../../../app/hooks";
import {Xmark} from "../../../assets/icons/Xmark";
import {StyledTable} from "./StyledTable";

export const WrongAnsTable = () => {

    const questions = useAppSelector(state => state.questions.questions)
    const wrongQuestions = questions.filter(el => el.status === "wrong")

    return (
        <StyledTable>
            <table>
                <thead>
                <tr>
                    <th>Вопрос</th>
                    <th>Неверный ответ</th>
                </tr>
                </thead>

                <tbody>
                {wrongQuestions.map(el => {
                        const chosen = el.possibleAnswers[`${el.chosenAnswer}`]
                        return (<tr key={el.id}>
                            <td className="td-id">{el.id}</td>
                            <td className="td-ans">
                                <Xmark size="15px"
                                       color="#F56C6C"/>
                                {chosen}
                            </td>
                        </tr>)
                    }
                )}
                </tbody>
            </table>
        </StyledTable>
    );
};
