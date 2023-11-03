import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import Quiz from './pages/Quiz/Quiz'
import { store } from './store/store'

function App() {
    return (
        <Provider store={store}>
            <Quiz />
        </Provider>
    )
}

export default App
