import React from 'react';
import './Item.css';

const item = (props) => {
  return (
    <div className="item">
      <div className="image"></div>

      <div className="info">
        <h3>{props.name}</h3>
        <p>Valor aproximado: R$ {props.value}</p>
        <p>Pode ser encontrado em:</p>
        <ul>
          <li>{props.stores}</li>
        </ul>
      </div>
    </div>
  );
};

export default item;