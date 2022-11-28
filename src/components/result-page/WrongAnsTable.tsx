import React from 'react';
import styled from "styled-components";
import {useAppSelector} from "../../app/hooks";
import {Xmark} from "../../assets/icons/Xmark";

const StyledTable = styled.div`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);

  table {
    border-collapse: collapse;
  }

  th, td {
    padding: 15px;
    border: 0.5px solid #E5E5E5;
    border-collapse: collapse;
  }

  thead {
    background: #E5E5E5;
  }

  tbody {
    tr {
      text-align: start;

      .td-ans {
        display: flex;
        gap: 10px;
      }

      .td-id {
        text-align: center;
      }
    }
  }

`
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
                            <td className={"td-id"}>{el.id}</td>
                            <td className={"td-ans"}>
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
