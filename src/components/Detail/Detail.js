import React, { useState, useRef, useEffect } from 'react';
import * as S from './Detail.styled';
import { Link } from 'react-router-dom';

const Detail = () => {
  // 상태 관리를 위한 useState 훅들
  const [moneyInput, setMoneyInput] = useState(0); // 투입된 금액 상태
  const [changeOutput, setChangeOutput] = useState(0); // 반환할 거스름돈 상태
  const [selectedProduct, setSelectedProduct] = useState(null); // 선택된 제품 상태
  const [moneyInserted, setMoneyInserted] = useState(false); // 화폐가 투입되었는지 여부 상태

  // 사용 가능한 화폐 단위와 최대 투입 가능 금액 설정
  const currencyUnits = [10, 50, 100, 500, 1000];
  const maxTotalMoney = 7000;

  // 거스름돈 상태 객체
  const changeCoins = {
    10: 10,
    50: 10,
    100: 10,
    500: 10,
    1000: 10
  };

  // 각 음료의 초기 상태 설정
  const [products, setProducts] = useState([
    { id: 1, name: '물', price: 450, stock: 10, soldOut: false },
    { id: 2, name: '커피', price: 500, stock: 10, soldOut: false },
    { id: 3, name: '이온음료', price: 550, stock: 10, soldOut: false },
    { id: 4, name: '고급커피', price: 700, stock: 10, soldOut: false },
    { id: 5, name: '탄산음료', price: 750, stock: 10, soldOut: false },
    { id: 6, name: '특화음료', price: 800, stock: 10, soldOut: false },
  ]);

  // 선택된 제품을 저장하는 Queue
  const selectedProductsQueue = useRef([]);

  // 거스름돈을 관리하는 스택
  const changeStack = useRef([]);

  // 화폐 입력 처리 함수
  const handleMoneyInput = (value) => {
    const newMoneyInput = moneyInput + value;
    // 최대 투입 가능 금액을 초과하지 않는지 확인
    if (newMoneyInput <= maxTotalMoney) {
      setMoneyInput(newMoneyInput);
      setMoneyInserted(true); // 화폐가 투입되었음을 표시
    } else {
      alert("7000원 이상은 투입할 수 없습니다.");
    }
  };

  // 제품 선택 처리 함수
  const handleProductSelection = (product) => {
    // 제품이 없는 경우 예외 처리
    if (!product) {
      alert("잘못된 제품입니다.");
      return;
    }

    // 화폐가 투입되었고, 제품 재고가 있으며, 투입 금액이 제품 가격 이상인 경우 처리
    if (moneyInserted && product.stock > 0 && moneyInput >= product.price) {
      const change = moneyInput - product.price; // 거스름돈 계산
      setChangeOutput(changeOutput + change); // 반환할 거스름돈 업데이트
      setSelectedProduct(product); // 선택된 제품 업데이트
      // 선택된 제품의 재고 감소 처리
      const updatedProducts = products.map((p) => {
        if (p.id === product.id) {
          // 재고가 0 이상인 경우에만 감소 처리
          if (p.stock > 0) {
            return {
              ...p,
              stock: p.stock - 1,
              soldOut: p.stock - 1 === 0, // 재고가 0일 때 품절 처리
            };
          }
          return p;
        }
        return p;
      });
      setProducts(updatedProducts); // 제품 상태 업데이트
      setMoneyInput(moneyInput - product.price); // 투입된 금액에서 제품 가격 차감
      updateChangeCoins(change); // 거스름돈 업데이트
      selectedProductsQueue.current.push(product); // 선택된 제품 Queue에 추가
    } else if (product.stock <= 0) {
      alert(`${product.name}은(는) 품절되었습니다.`);
    } else {
      alert("잔액이 부족합니다.");
    }
  };

  // 거스름돈 업데이트 함수
  const updateChangeCoins = (change) => {
    let remainingChange = change;
    const newChangeStack = [];
    // 큰 단위 동전부터 처리하여 스택에 추가
    Object.keys(changeCoins).reverse().forEach((coin) => {
      const count = Math.min(Math.floor(remainingChange / parseInt(coin)), changeCoins[coin]);
      for (let i = 0; i < count; i++) {
        newChangeStack.push(parseInt(coin));
      }
      remainingChange -= count * parseInt(coin);
    });
    // 남은 거스름돈이 있다면 알림 후 이전 상태로 복구
    if (remainingChange > 0) {
      alert("거스름돈이 부족합니다.");
      setChangeOutput(changeOutput - change);
    } else {
      changeStack.current = newChangeStack; // 거스름돈 스택 업데이트
    }
  };

  // 화폐 반환 처리 함수
  const returnChange = () => {
    // Queue에서 선택된 제품을 순서대로 반환 처리
    while (selectedProductsQueue.current.length > 0) {
      const product = selectedProductsQueue.current.shift();
      // 선택된 제품 반환 로직...
    }

    // 거스름돈 스택에서 동전을 순서대로 반환 처리
    while (changeStack.current.length > 0) {
      const coin = changeStack.current.pop();
      // 거스름돈 반환 로직...
    }

    // 상태 초기화
    setMoneyInput(0);
    setChangeOutput(0);
    setSelectedProduct(null);
    setMoneyInserted(false);
  };

  // 거스름돈이 있는지 확인하는 함수
  const hasChange = () => {
    return changeStack.current.length > 0;
  };

  // 사용 내역 초기화 및 저장 관련 useEffect
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('transactionHistory')) || [];
    selectedProductsQueue.current = savedHistory; // 저장된 사용 내역을 Queue에 설정
  }, []);

  useEffect(() => {
    localStorage.setItem('transactionHistory', JSON.stringify(selectedProductsQueue.current));
  }, [selectedProductsQueue.current]); // 사용 내역이 업데이트 될 때마다 로컬 스토리지에 저장

  return (
<S.Wrapper>
  <S.MoneyDisplayContainer>
    {/* 잔돈 표시 */}
    <span>투입: {moneyInput}원</span>
    <span>거스름돈: {changeOutput}원</span>
  </S.MoneyDisplayContainer>

  <S.MoneyInputContainer>
    {/* 화폐 입력 버튼 */}
    {currencyUnits.map((unit) => (
      <button key={unit} onClick={() => handleMoneyInput(unit)}>
        {unit}원
      </button>
    ))}
  </S.MoneyInputContainer>

  {/* 첫 번째 줄 음료 선택 UI 요소 */}
  <S.Line1 />
  <S.TextImageContainer1>
    {/* 물 */}
    <S.WaterGroup onClick={() => handleProductSelection(products[0])}>
      <S.WaterImage src="/img/water.png" alt="Water" />
      <S.WaterText style={{ color: moneyInserted ? (products[0].stock > 0 && moneyInput >= products[0].price ? 'green' : 'red') : 'black' }}>450원</S.WaterText>
    </S.WaterGroup>

    {/* 커피 */}
    <S.CoffeeGroup onClick={() => handleProductSelection(products[1])}>
      <S.CoffeeImage src="/img/coffee.png" alt="Coffee" />
      <S.CoffeeText style={{ color: moneyInserted ? (products[1].stock > 0 && moneyInput >= products[1].price ? 'green' : 'red') : 'black' }}>500원</S.CoffeeText>
    </S.CoffeeGroup>

    {/* 이온음료 */}
    <S.SportsDrinkGroup onClick={() => handleProductSelection(products[2])}>
      <S.SportsDrinkImage src="/img/sports_drink.png" alt="Sports Drink" />
      <S.SportsDrinkText style={{ color: moneyInserted ? (products[2].stock > 0 && moneyInput >= products[2].price ? 'green' : 'red') : 'black' }}>550원</S.SportsDrinkText>
    </S.SportsDrinkGroup>
  </S.TextImageContainer1>

  {/* 두 번째 줄 음료 선택 UI 요소 */}
  <S.Line2 />
  <S.TextImageContainer2>
    {/* 고급커피 */}
    <S.CoffeeStarGroup onClick={() => handleProductSelection(products[3])}>
      <S.CoffeeStarImage src="/img/coffee_star.png" alt="Coffee Star" />
      <S.CoffeeStarText style={{ color: moneyInserted ? (products[3].stock > 0 && moneyInput >= products[3].price ? 'green' : 'red') : 'black' }}>700원</S.CoffeeStarText>
    </S.CoffeeStarGroup>

    {/* 탄산음료 */}
    <S.SparklingGroup onClick={() => handleProductSelection(products[4])}>
      <S.SparklingImage src="/img/sparkling.png" alt="Sparkling Drink" />
      <S.SparklingText style={{ color: moneyInserted ? (products[4].stock > 0 && moneyInput >= products[4].price ? 'green' : 'red') : 'black' }}>750원</S.SparklingText>
    </S.SparklingGroup>

    {/* 특화음료 */}
    <S.SpecialGroup onClick={() => handleProductSelection(products[5])}>
      <S.SpecialImage src="/img/special.png" alt="Special Drink" />
      <S.SpecialText style={{ color: moneyInserted ? (products[5].stock > 0 && moneyInput >= products[5].price ? 'green' : 'red') : 'black' }}>800원</S.SpecialText>
    </S.SpecialGroup>
  </S.TextImageContainer2>

  {/* 거스름돈 반환 버튼 */}
  <S.ChangeReturnButton onClick={hasChange() ? returnChange : null}>거스름돈 반환</S.ChangeReturnButton>

  {/* 메인 화면으로 이동하는 링크 */}
  <Link to="/">
    <S.GoToMainButton>main.js로 이동</S.GoToMainButton>
  </Link>
  </S.Wrapper>
  );
};

export default Detail;