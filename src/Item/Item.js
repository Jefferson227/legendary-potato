import React from 'react';
import './Item.css';

const item = () => {
  return (
    <div className="flex-item">
      <div className="image"></div>
      <h3>Sofás</h3>
      <p>Valor aproximado: R$ 25,00</p>
      <p>Pode ser encontrado em:</p>
      <ul>
        <li>Freitas Varejo</li>
      </ul>
    </div>
  );
};

export default item;