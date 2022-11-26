import {QuestionStatusType} from "./questions-reducer";

export const Questions = [
    {
        id: 1,
        body: "Как можно добавить элемент в начало массива?",
        possibleAnswers: {
            1: "Использовать Array.prototype.push()",
            2: "Использовать Array.prototype.pop()",
            3: "Использовать Array.prototype.shift()",
            4: "Использовать Array.prototype.unshift()",
        },
        rightAnswer: "4",
        status: "idle" as QuestionStatusType
    },
    {
        id: 2,
        body: "Как можно удалить элемент из начала массива?",
        possibleAnswers: {
            1: "Использовать Array.prototype.push()",
            2: "Использовать Array.prototype.pop()",
            3: "Использовать Array.prototype.shift()",
            4: "Использовать Array.prototype.unshift()",
        },
        rightAnswer: "3",
        status: "idle"  as QuestionStatusType
    },
    {
        id: 3,
        body: "Как можно добавить элемент в конец массива?",
        possibleAnswers: {
            1: "Использовать Array.prototype.push()",
            2: "Использовать Array.prototype.pop()",
            3: "Использовать Array.prototype.shift()",
            4: "Использовать Array.prototype.unshift()",
        },
        rightAnswer: "1",
        status: "idle"  as QuestionStatusType
    },
    {
        id: 4,
        body: "Как можно удалить элемент с конца массива?",
        possibleAnswers: {
            1: "Использовать Array.prototype.push()",
            2: "Использовать Array.prototype.pop()",
            3: "Использовать Array.prototype.shift()",
            4: "Использовать Array.prototype.unshift()",
        },
        rightAnswer: "2",
        status: "idle"  as QuestionStatusType
    },
]
