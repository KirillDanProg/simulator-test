import React, {FC, ReactElement} from 'react';


type WrapperPropsType = {
    callback?: () => void
    children: ReactElement | ReactElement[] | string | string[]
    className?: string
}

export const Wrapper: FC<WrapperPropsType> = ({callback, children, className}) => {
    const callbackHandler = () => {
        callback && callback()
    }
    return (
        <div onClick={callbackHandler}
             className={className}
        >
            {children}
        </div>
    );
};

