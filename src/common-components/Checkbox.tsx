import React, {FC} from 'react';
import styled from "styled-components";


const StyledCheckbox = styled.div`
  display: inline-block;

  .container {
    display: block;
    position: relative;
    cursor: pointer;
  }

  input {
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1.5px solid black;
    border-radius: 4px;
  }

  input:checked ~ .checkmark:after {
    position: absolute;
    content: "";
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 10px;
    height: 5px;
    border: solid black;
    border-width: 0 0 2px 2px;
  }
`
type CheckboxPropsType = {
    id: number
    cur: number | null
}
export const Checkbox: FC<CheckboxPropsType> = (props) => {

    return (
        <StyledCheckbox>
            <label className={"container"}>
                <input type={"checkbox"}
                       checked={props.cur === props.id}/>

                <span className={"checkmark"}></span>
            </label>
        </StyledCheckbox>


    );
};

