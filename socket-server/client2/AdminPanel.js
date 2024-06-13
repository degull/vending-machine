// client2/AdminPanel.js

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

const AdminPanel = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // 소켓으로부터 데이터 수신
    socket.on('productSelected', (product) => {
      setSelectedProduct(product);
    });

    return () => {
      socket.off('productSelected');
    };
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>
      {/* 선택된 제품 정보 출력 */}
      {selectedProduct && (
        <p>Selected Product in Vending Machine: {selectedProduct.name} - {selectedProduct.price}원</p>
      )}
    </div>
  );
};

export default AdminPanel;
