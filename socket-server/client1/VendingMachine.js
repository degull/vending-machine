// client1/VendingMachine.js

import React, { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const VendingMachine = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelection = (product) => {
    setSelectedProduct(product);
    socket.emit('productSelected', product);
  };

  return (
    <div>
      <h2>Vending Machine</h2>
      <button onClick={() => handleProductSelection({ id: 1, name: 'Coffee', price: 500 })}>
        Select Coffee
      </button>
      {/* 선택된 제품 정보 출력 */}
      {selectedProduct && (
        <p>Selected Product: {selectedProduct.name} - {selectedProduct.price}원</p>
      )}
    </div>
  );
};

export default VendingMachine;
