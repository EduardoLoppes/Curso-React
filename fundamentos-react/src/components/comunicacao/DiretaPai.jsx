import React from "react";
import DiretaFilho from "./DiretaFilho"


export default props => {
    return (
        <div>
            <DiretaFilho texto="Nelson" numero={20} nerd={true} />
            <DiretaFilho texto="Junior" numero={10} nerd={false} />
        </div>
    )
}