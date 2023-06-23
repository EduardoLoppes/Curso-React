import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import First from './components/basics/First component'
import WithParameter from './components/basics/ComParametro'


ReactDOM.render(
    <div id="app">
        <First></First>
        <WithParameter titulo="Situação do aluno"
            aluno="Paulo"
            nota= {9.5} 
        />
    </div>,
    document.getElementById('root')
)