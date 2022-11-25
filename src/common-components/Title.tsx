import React, {FC} from 'react';

type TitlePropsType = {
    type: "front" | "back" | null
}

const Title: FC<TitlePropsType> = (props) => {
    return (
        <>
            {props.type === "front"
                ? <h2>Тест по направлению Front-end</h2>
                : <h2>Тест по направлению Back-end</h2>
            }
        </>
    );
};

export default Title;