export enum QuizScreen {
    Start = 'Start',
    InGame = 'InGame',
    GameOver = 'GameOver'
}

export type QuizQuestion = {
    question: string
    content: string[]
    correct: number[]
    prize: number
}

export type QuizData = {
    data: QuizQuestion[]
}
