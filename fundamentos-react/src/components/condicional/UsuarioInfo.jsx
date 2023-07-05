import React from "react";
import If, {Else} from './if'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            {/* <If test={usuario && usuario.nome}>
                Seja Bem Vindo <strong> {props.usuario.nome}</strong>
            </If>

            <If test={!usuario || !usuario.nome}>
                Seja Bem Vindo <strong>Meu rei</strong>
            </If> */}

            <If test={usuario && usuario.nome}>
                Seja Bem Vindo <strong> {props.usuario.nome}</strong>

                <Else>
                    Seja Bem Vindo <strong>Meu rei</strong>
                </Else>
            </If>
        </div>
    )
}