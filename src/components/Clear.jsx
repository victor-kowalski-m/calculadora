import React from 'react';
import './Clear.css';

export const Clear = (props) => (
<div className="botao-clear" onClick={props.Limpar}>
{props.children}
    </div>
);