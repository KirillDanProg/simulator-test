import React from 'react';
import one from "../../assets/photo_2023-06-10_15-49-00.jpg"
import two from "../../assets/photo_2023-06-10_15-49-00 (2).jpg"
import {useNavigate} from "react-router-dom";
import {StyledStartPage} from "./StyledStartPage";
import {Button, Flex, Title} from "../../common-components";
import {Wrapper} from "../../common-components/Wrapper";


export const StartPage = () => {
    const navigate = useNavigate()

    const startTestHandler = () => {
        navigate('test')
    }
    return (
        <StyledStartPage>
            <Button
                className='start-btn'
                variant={'contained'}
                callback={startTestHandler}
            >
                Начать тест
            </Button>
            <Title
                value="ТЕСТ ЕСЛИ ЛИ У ВАС ПРЕДРАСПОЛОЖЕННОСТЬ К ЭЗОТЕРИКИ ОТ МАРИИ МИРОНОВОЙ."
                className="start-page-title"
            />

            <p className='text'>Люди ежеминутно встречаются со
                сверхъестественными силами, но часто просто не замечают их. Кто-то с рождения видит
                вещие сны, но приписывает это совпадению, а другие могут чувствовать неприятности , но не отмахиваются
                от предчувствия.
            </p>
            <Title
                value="КАК УЗНАТЬ ЭЗОТЕРИЧЕСКИЕ СПОСОБНОСТИ ПРИ ПОМОЩИ ТЕСТА."
                className="start-page-title"
            />
            <p className='text'>Способности к эзотерики существуют у всех людей, дилемма в том, что требуется узнать, на
                какой ступени
                развития стоит потенциал человека.
            </p>
            <p className='text'>
                Возможно, именно ты обладаешь сверхъестественным сильным потомственным
                даром?
            </p>
            <p className='text'>
                А может быть, наличие у тебя способностей очень трудно рассмотреть, когда они находятся на низшей
                ступени развития.
            </p>
            <p className='text'>
                Тогда придется изучать специальную литературу/ курсы/ тренинги , чтобы увеличить и познать свои
                способности.
            </p>

            <Flex direction={"column"}
                  gap={"40px"}
            >
                <Wrapper className={"imgContainer"}>
                    <img className={"img"}
                         src={one}
                    />
                </Wrapper>

                <Wrapper className={"imgContainer"}>
                    <img className={"img"}
                         src={two}
                    />
                </Wrapper>
            </Flex>


        </StyledStartPage>
    );
};

