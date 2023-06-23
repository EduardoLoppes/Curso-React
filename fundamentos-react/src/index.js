import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import First from './components/basics/First component'
import ComParametro from './components/basics/ComParametro'
import Fragmento from  './components/basics/Fragmento'


ReactDOM.render(
    <div id="app">
        <First></First>
        <ComParametro titulo="Situação do aluno"
            aluno="Paulo"
            nota= {9.5} />
            <Fragmento/>
        
    </div>,
    document.getElementById('root')
)