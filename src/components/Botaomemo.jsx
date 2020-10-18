import React from "react";
import "./Botao.css";

export const Botaomemo = props => (
<div 
className={`estrutura-botao`}
onClick={() => props.noClique(props.posicao)}
>
    {props.children}
</div>
);