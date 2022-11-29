import React, {FC} from 'react';
import styled from "styled-components";

const StyledProgressScale = styled.div<ProgressScalePropsType>`
  display: flex;
  align-items: center;
  justify-content: center;

  .circ-progress {
    width: 170px;
    height: 170px;
    background: conic-gradient(#3BB98A ${props => props.value * 3.6}deg, lightgray 0deg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circ-progress::before {
    content: "";
    position: absolute;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: #fff;
  }

  .progress-value {
    position: relative;
    font-size: 40px;
  }
`

type ProgressScalePropsType = {
    value: number
}

export const ProgressScale: FC<ProgressScalePropsType> = (props) => {
    return (
        <StyledProgressScale {...props}>
            <div className="circ-progress">
                <div className="progress-value">
                    {`${props.value}%`}
                </div>
            </div>

        </StyledProgressScale>
    );
};

