import React from "react";
import "./Botao.css";

const eOperador = val => {
    return !isNaN(val) || val === "." || val ==="=";
}

export const Botao = props => (
<div 
className={`estrutura-botao ${eOperador(props.children) ? null: "operador"}`}
onClick={() => props.noClique(props.children)}
>
    {props.children}
</div>
);

