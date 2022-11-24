import React from 'react';
import styled from "styled-components";


const StyledCheckbox = styled.div`
  display: inline-block;

  .container {
    display: block;
    position: relative;
    margin-bottom: 12px;
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
    border: 2px solid black;
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
    border-width: 0 0 3px 3px;

  }
`
export const Checkbox = (props: {id: number,cur: number, setValue: (id: number) => void}) => {

    const onChangeHandler = () => {
        props.setValue(props.id)
    }

    return (
        <StyledCheckbox>
            <label className={"container"}>
                <input onChange={onChangeHandler}
                    type={"checkbox"}
                    checked={props.cur === props.id}/>

                <span className={"checkmark"}></span>
            </label>
        </StyledCheckbox>


    );
};

