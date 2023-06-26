import React from "react"

export default props => {
    const { min, max } = props;

    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Aleatório</h2>
            <p><strong>mínimo</strong>{min}</p>
            <p><strong>Valor máximo</strong>{max}</p>
            <p><strong>escolhido: </strong>{aleatorio}</p>
        </div>
    )
}
