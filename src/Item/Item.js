import React from 'react';
import './Item.css';

const item = () => {
  return (
    <div className="item">
      <div className="image"></div>

      <div className="info">
        <h3>Sofás</h3>
        <p>Valor aproximado: R$ 25,00</p>
        <p>Pode ser encontrado em:</p>
        <ul>
          <li>Freitas Varejo</li>
        </ul>
      </div>
    </div>
  );
};

export default item;