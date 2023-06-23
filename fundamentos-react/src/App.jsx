import React from "react";
import First from './components/basics/First component'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from "./components/basics/Aleatorio";

export default _ =>
    <div id="app">
        <Aleatorio min={10} max={60} />
        <h1>Fundamentos React (Arrow _)</h1>
        <Fragmento />
        <ComParametro titulo="Situação do aluno"
            aluno="Paulo"
            nota={9.5} />
        <First />
    </div>
