import React, { useState, useEffect } from 'react';
import * as S from './AdminPage.styled';

const AdminPage = ({ onLogout }) => {
  const [salesData, setSalesData] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [currency, setCurrency] = useState({});

  useEffect(() => {
    // 로컬 스토리지에서 데이터 로드
    const savedSalesData = JSON.parse(localStorage.getItem('salesData')) || [];
    const savedInventory = JSON.parse(localStorage.getItem('inventory')) || [];
    const savedCurrency = JSON.parse(localStorage.getItem('currency')) || {};
    setSalesData(savedSalesData);
    setInventory(savedInventory);
    setCurrency(savedCurrency);
  }, []);

  const handleSalesReport = () => {
    // 일별/월별 매출 계산 로직
    console.log("일별/월별 매출 계산");
  };

  const handleInventoryRestock = (item) => {
    // 재고 보충 로직
    console.log("재고 보충:", item);
  };

  const handleCurrencyUpdate = (amount) => {
    // 화폐 현황 업데이트 및 수금 로직
    console.log("화폐 현황 업데이트:", amount);
  };

  const handleProductUpdate = (product, newDetails) => {
    // 판매가격 및 판매이름 변경 로직
    console.log("판매가격 및 판매이름 변경:", product, newDetails);
  };

  return (
    <S.Container>
      <S.Header>
        <h2>관리자 페이지</h2>
        <S.LogoutButton onClick={onLogout}>로그아웃</S.LogoutButton>
      </S.Header>

      <S.Section>
        <h3>일별/월별 매출</h3>
        <S.Button onClick={handleSalesReport}>매출 산출</S.Button>
      </S.Section>

      <S.Section>
        <h3>재고 보충</h3>
        {inventory.map((item, index) => (
          <S.InventoryItem key={index}>
            <span>{item.name} - {item.stock}</span>
            <S.Button onClick={() => handleInventoryRestock(item)}>보충</S.Button>
          </S.InventoryItem>
        ))}
      </S.Section>

      <S.Section>
        <h3>화폐 현황</h3>
        <p>현금: {currency.total}</p>
        <S.Button onClick={() => handleCurrencyUpdate(currency.total)}>수금</S.Button>
      </S.Section>

      <S.Section>
        <h3>판매 가격/이름 변경</h3>
        {inventory.map((item, index) => (
          <S.ProductUpdate key={index}>
            <span>{item.name} - {item.price}</span>
            <S.Input
              type="text"
              placeholder="새 이름"
              onChange={(e) => handleProductUpdate(item, { ...item, name: e.target.value })}
            />
            <S.Input
              type="number"
              placeholder="새 가격"
              onChange={(e) => handleProductUpdate(item, { ...item, price: parseFloat(e.target.value) })}
            />
          </S.ProductUpdate>
        ))}
      </S.Section>
    </S.Container>
  );
};

export default AdminPage;
