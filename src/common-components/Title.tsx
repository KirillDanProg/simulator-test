import React, {FC} from 'react';
import styled from "styled-components";

type TitlePropsType = {
    type?: "front" | "back" | null
    value?: string
    className?: string
}

const StyledTitle = styled.div`

`
const Title: FC<TitlePropsType> = (props) => {

    return (
        <StyledTitle {...props}>
            {
                props.type ?
                    props.type === "front"
                        ? <h2 className={props.className}>Тест по направлению Front-end</h2>
                        : <h2 className={props.className}>Тест по направлению Back-end</h2>
                    :
                    <h2 className={props.className}>{props.value}</h2>
            }

        </StyledTitle>
    );
};

export default Title;