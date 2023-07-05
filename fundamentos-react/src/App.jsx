import React from "react";


import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAluno from "./components/repeticao/ListaAluno";
import FamilyMember from "./components/basics/FamilyMember"
import Family from "./components/basics/Family"
import Card from "./components/layout/Card";
import First from "./components/basics/First component";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";

export default _ =>
    <div className="App">
        <h1>Fundamentos do React</h1>

        <div className="Cards">
            <Card titulo="#08 Renderização Condicional" color="#9568F5">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Paulo'}}></UsuarioInfo>
                <UsuarioInfo usuario={{email: 'P@aulo.com'}}></UsuarioInfo>
                <UsuarioInfo usuario={{}}></UsuarioInfo>
            </Card>

            <Card titulo="#07 Desafio Tabela" color="#73F244">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 Repetição" color="#EB6EA6">
                <ListaAluno></ListaAluno>
            </Card>

            <Card titulo="#05 Componente Com Filhos" color="#8A015E">
                {
                    <Family sobrenome="Lopes">
                        <FamilyMember nome="Eloisa" />
                        <FamilyMember nome="Eduardo" />
                        <FamilyMember nome="Rosiane" />
                    </Family>
                }
            </Card>

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
