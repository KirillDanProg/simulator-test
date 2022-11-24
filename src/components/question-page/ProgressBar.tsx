import React, {useState} from 'react';
import styled from "styled-components";

const qs = [
    {id: 1,}, {id: 2,}, {id: 3,}, {id: 4,}
]

const StyledDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
`
const StepDot = (props: {setCur: (cur: number) => void, id: number}) => {
    return (
        <StyledDot onClick={() => props.setCur(props.id)}>

        </StyledDot>
    )
}

const StyledStepper = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px;
`
export const Stepper = () => {

    const [cur, setCur] = useState(1)

    return (
        <StyledStepper>

            {`${cur} из ${qs.length}` }

            {qs.map(dot => <StepDot id={dot.id}  setCur={setCur}/>)}

        </StyledStepper>
    )
}