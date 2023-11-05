import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import Router from 'src/components/Router/Router'
import { store } from './store'

function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}

export default App
