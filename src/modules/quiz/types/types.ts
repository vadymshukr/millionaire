export enum QuizScreen {
    Start,
    InGame,
    GameOver
}

export type QuizQuestion = {
    question: string
    content: string[]
    correct: number[]
}

export type QuizData = {
    data: QuizQuestion[]
}
