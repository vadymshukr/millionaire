export enum QuizScreen {
    Start = 'Start',
    InGame = 'InGame',
    Result = 'Result'
}

export type QuizQuestion = {
    question: string
    content: string[]
    correct: number[]
    prize: number
}
