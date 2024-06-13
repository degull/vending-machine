import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './AdminPage.styled';

const AdminPage = ({ onLogout }) => {
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [currency, setCurrency] = useState({});
  const [products, setProducts] = useState([
    { id: 1, name: '물', price: 450, stock: 10, soldOut: false },
    { id: 2, name: '커피', price: 500, stock: 10, soldOut: false },
    { id: 3, name: '이온음료', price: 550, stock: 10, soldOut: false },
    { id: 4, name: '고급커피', price: 700, stock: 10, soldOut: false },
    { id: 5, name: '탄산음료', price: 750, stock: 10, soldOut: false },
    { id: 6, name: '특화음료', price: 800, stock: 10, soldOut: false },
  ]);
  const [dailySales, setDailySales] = useState([]);
  const [monthlySales, setMonthlySales] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 데이터 로드
    const savedTransactionHistory = JSON.parse(localStorage.getItem('transactionHistory')) || [];
    const savedInventory = JSON.parse(localStorage.getItem('inventory')) || [];
    const savedCurrency = JSON.parse(localStorage.getItem('currency')) || { total: 0, reserve: 1000 };
    setTransactionHistory(savedTransactionHistory);
    setInventory(savedInventory);
    setCurrency(savedCurrency);

    // 임시 사용 내역 데이터 생성
    const tempTransactionHistory = [
      { product: '물', price: 450, time: getCurrentTime() },
      { product: '커피', price: 500, time: getCurrentTime() },
      { product: '이온음료', price: 550, time: getCurrentTime() },
      { product: '고급커피', price: 700, time: getCurrentTime() },
      { product: '탄산음료', price: 750, time: getCurrentTime() }
    ];
    setTransactionHistory(tempTransactionHistory);
    localStorage.setItem('transactionHistory', JSON.stringify(tempTransactionHistory));

    // 재고 초기화
    const initialInventory = products.map(product => ({
      name: product.name,
      stock: Math.floor(Math.random() * 10) + 1  // 1부터 10 사이의 임의의 값으로 초기화
    }));
    setInventory(initialInventory);
    localStorage.setItem('inventory', JSON.stringify(initialInventory));
  }, [products]);

  const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const handleSalesReport = () => {
    // 현재 날짜 가져오기
    const today = new Date();

    // 일별 매출 계산
    const dailySalesResult = transactionHistory.filter(transaction => {
      const transactionDate = new Date(transaction.time);
      return transactionDate.getDate() === today.getDate() &&
        transactionDate.getMonth() === today.getMonth() &&
        transactionDate.getFullYear() === today.getFullYear();
    });
    setDailySales(dailySalesResult);

    // 월별 매출 계산
    const monthlySalesResult = transactionHistory.filter(transaction => {
      const transactionDate = new Date(transaction.time);
      return transactionDate.getMonth() === today.getMonth() &&
        transactionDate.getFullYear() === today.getFullYear();
    });
    setMonthlySales(monthlySalesResult);
  };

  const handleInventoryRestock = (item) => {
    const updatedInventory = inventory.map((invItem) =>
      invItem.name === item.name ? { ...invItem, stock: invItem.stock + 1 } : invItem
    );
    setInventory(updatedInventory);
    saveToLocalStorage('inventory', updatedInventory);
  };

  const handleCurrencyUpdate = (amount) => {
    if (currency.total - amount < currency.reserve) {
      alert(`최소한의 화폐 ${currency.reserve}원이 남아있어야 합니다.`);
      return;
    }
    const newTotal = currency.total - amount;
    setCurrency({ ...currency, total: newTotal });
    saveToLocalStorage('currency', { ...currency, total: newTotal });
  };

  const handleProductUpdate = (product, newDetails) => {
    const updatedInventory = inventory.map((invItem) =>
      invItem.name === product.name ? { ...invItem, ...newDetails } : invItem
    );
    setInventory(updatedInventory);
    saveToLocalStorage('inventory', updatedInventory);
  };

  // 현재 시간을 문자열로 반환하는 함수
  const getCurrentTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  // 수금 처리 함수
  const handleCollection = () => {
    const collectedAmount = prompt('수금할 금액을 입력하세요.');
    if (collectedAmount === null || collectedAmount === '') {
      alert('수금할 금액을 입력해주세요.');
      return;
    }
    const amount = parseInt(collectedAmount, 10);
    if (isNaN(amount) || amount <= 0) {
      alert('올바른 금액을 입력해주세요.');
      return;
    }
    if (currency.total - amount < currency.reserve) {
      alert(`최소한의 화폐 ${currency.reserve}원이 남아있어야 합니다.`);
      return;
    }
    const newTotal = currency.total - amount;
    setCurrency({ ...currency, total: newTotal });
    saveToLocalStorage('currency', { ...currency, total: newTotal });
    alert(`${amount}원을 수금하였습니다.`);
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
        <div>
          <h4>일별 매출</h4>
          <ul>
            {dailySales.map((sale, index) => (
              <li key={index}>{sale.product} - {sale.price}원 - {sale.time}</li>
            ))}
          </ul>
          <h4>월별 매출</h4>
          <ul>
            {monthlySales.map((sale, index) => (
              <li key={index}>{sale.product} - {sale.price}원 - {sale.time}</li>
            ))}
          </ul>
        </div>
      </S.Section>

      <S.Section>
        <h3>재고 보충</h3>
        <p>다음 음료를 클릭하면 재고가 1개씩 보충됩니다:</p>
        {inventory.map((item, index) => (
          <S.InventoryItem key={index}>
            <span>{item.name} - {item.stock}</span>
            <S.Button onClick={() => handleInventoryRestock(item)}>보충</S.Button>
          </S.InventoryItem>
        ))}
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

      <S.Section>
        <h3>사용 내역</h3>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제품명</th>
              <th>가격</th>
              <th>사용 시간</th>
            </tr>
          </thead>
          <tbody>
            {transactionHistory.map((transaction, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{transaction.product}</td>
                <td>{transaction.price}원</td>
                <td>{transaction.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.Section>

      <S.Section>
        <Link to="/detail">
          <S.Button>상세 페이지로 이동</S.Button>
        </Link>
      </S.Section>
    </S.Container>
  );
};

export default AdminPage;
