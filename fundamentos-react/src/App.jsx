import React from "react";

import "./App.css";
import Card from "./components/layout/Card";
import First from "./components/basics/First component";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";

export default _ =>
    <div className="App">
        <h1>Fundamentos do React</h1>
        <div className="Cards">

            <Card titulo="#04 Desafio Aleatório" color="#080">
                <Aleatorio min={10} max={60} />
            </Card>

            <Card titulo="#03 Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 Com Parametro" color="#E8B71A">
                <ComParametro titulo="Situação do aluno"
                    aluno="Paulo"
                    nota={9.5} />

            </Card>

            <Card titulo="#01 Primeiro Componente" color="#588C73">
                <First />

            </Card>
        </div>


    </div>
