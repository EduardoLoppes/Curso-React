import React from "react";


import Card from "./components/layout/Card";
import First from './components/basics/First component'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from "./components/basics/Aleatorio";

export default _ =>
    <div id="app">
        <h1>Fundamentos do React</h1>


        <Card titulo="#04 Desafio Aleatório">
            <Aleatorio min={10} max={60} />
        </Card>

        <Card titulo="#03 Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="#02 Com Parametro">
            <ComParametro titulo="Situação do aluno"
                aluno="Paulo"
                nota={9.5} />

        </Card>

        <Card titulo="#01 Primeiro Componente">
            <First />

        </Card>



    </div>
