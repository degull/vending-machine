import React, { useState, useRef } from 'react';
import * as S from './Detail.styled';

const Detail = () => {
  const [moneyInput, setMoneyInput] = useState(0);
  const [changeOutput, setChangeOutput] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [moneyInserted, setMoneyInserted] = useState(false); // 화폐가 투입되었는지 여부

  const currencyUnits = [10, 50, 100, 500, 1000];
  const maxTotalMoney = 7000;

  // 거스름돈 상태
  const changeCoins = {
    10: 10,
    50: 10,
    100: 10,
    500: 10,
    1000: 10
  };

  // 음료 객체 배열을 만들어 각 음료의 상태 관리
  const [products, setProducts] = useState([
    { id: 1, name: '물', price: 450, stock: 10, soldOut: false },
    { id: 2, name: '커피', price: 500, stock: 10, soldOut: false },
    { id: 3, name: '이온음료', price: 550, stock: 10, soldOut: false },
    { id: 4, name: '고급커피', price: 700, stock: 10, soldOut: false },
    { id: 5, name: '탄산음료', price: 750, stock: 10, soldOut: false },
    { id: 6, name: '특화음료', price: 800, stock: 10, soldOut: false },
    // 나머지 음료들도 동일하게 추가합니다.
  ]);

  // 선택된 제품을 담을 Queue
  const selectedProductsQueue = useRef([]);

  // 거스름돈을 담을 스택
  const changeStack = useRef([]);

  const handleMoneyInput = (value) => {
    const newMoneyInput = moneyInput + value;
    if (newMoneyInput <= maxTotalMoney) {
      setMoneyInput(newMoneyInput);
      setMoneyInserted(true); // 화폐가 투입되었음을 표시
    } else {
      alert("7000원 이상은 투입할 수 없습니다.");
    }
  };

  const handleProductSelection = (product) => {
    // 제품이 없는 경우에 대한 예외 처리
    if (!product) {
      alert("잘못된 제품입니다.");
      return;
    }

    if (
      moneyInserted &&
      product.stock > 0 &&
      moneyInput >= product.price
    ) {
      const change = moneyInput - product.price;
      setChangeOutput(changeOutput + change);
      setSelectedProduct(product);
      // 선택된 음료의 재고를 줄입니다.
      const updatedProducts = products.map((p) => {
        if (p.id === product.id) {
          if (p.stock > 0) {
            // 재고가 0 이상인 경우에만 재고를 감소시킵니다.
            return {
              ...p,
              stock: p.stock - 1,
              // 재고가 0이 될 때 품절 처리합니다.
              soldOut: p.stock - 1 === 0,
            };
          }
          return p;
        }
        return p;
      });
      setProducts(updatedProducts);
      setMoneyInput(moneyInput - product.price); // 투입된 금액을 갱신
      updateChangeCoins(change); // 거스름돈 업데이트
      selectedProductsQueue.current.push(product); // 선택된 제품 Queue에 추가
    } else if (product.stock <= 0) {
      alert(`${product.name}은(는) 품절되었습니다.`);
    } else {
      alert("잔액이 부족합니다.");
    }
  };

  // 거스름돈 업데이트 함수 수정
  const updateChangeCoins = (change) => {
    let remainingChange = change;
    const newChangeStack = [];
    Object.keys(changeCoins).reverse().forEach((coin) => {
      const count = Math.min(Math.floor(remainingChange / parseInt(coin)), changeCoins[coin]);
      for (let i = 0; i < count; i++) {
        newChangeStack.push(parseInt(coin));
      }
      remainingChange -= count * parseInt(coin);
    });
    if (remainingChange > 0) {
      alert("거스름돈이 부족합니다.");
      setChangeOutput(changeOutput - change);
    } else {
      changeStack.current = newChangeStack;
    }
  };

  // 화폐 반환 함수 수정
  const returnChange = () => {
    // Queue에서 선택된 제품을 하나씩 제거하면서 반환
    while (selectedProductsQueue.current.length > 0) {
      const product = selectedProductsQueue.current.shift();
      // 선택된 제품 반환 로직...
    }

    // 스택에 있는 거스름돈을 반환
    while (changeStack.current.length > 0) {
      const coin = changeStack.current.pop();
      // 화폐 반환 로직...
    }

    // 나머지 상태 초기화
    setMoneyInput(0);
    setChangeOutput(0);
    setSelectedProduct(null);
    setMoneyInserted(false);
  };

  // 거스름돈이 있는지 확인하는 함수
  const hasChange = () => {
    return changeStack.current.length > 0;
  };

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

      <S.Line2 />
      <S.TextImageContainer2>
        {/* 고급커피 */}
        <S.CoffeeStarGroup onClick={() => handleProductSelection(products[3])}>
          <S.CoffeeStarImage src="/img/coffee_star.png" alt="Water" />
          <S.CoffeeStarText style={{ color: moneyInserted ? (products[3].stock > 0 && moneyInput >= products[3].price ? 'green' : 'red') : 'black' }}>700원</S.CoffeeStarText>
        </S.CoffeeStarGroup>

        {/* 탄산음료 */}
        <S.SparklingGroup onClick={() => handleProductSelection(products[4])}>
          <S.SparklingImage src="/img/sparkling.png" alt="Water" />
          <S.SparklingText style={{ color: moneyInserted ? (products[4].stock > 0 && moneyInput >= products[4].price ? 'green' : 'red') : 'black' }}>750원</S.SparklingText>
        </S.SparklingGroup>

        {/* 특화음료 */}
        <S.SpecialGroup onClick={() => handleProductSelection(products[5])}>
          <S.SpecialImage src="/img/special.png" alt="Water" />
          <S.SpecialText style={{ color: moneyInserted ? (products[5].stock > 0 && moneyInput >= products[5].price ? 'green' : 'red') : 'black' }}>800원</S.SpecialText>
        </S.SpecialGroup>
      </S.TextImageContainer2>

      <S.ChangeReturnButton onClick={hasChange() ? returnChange : null}>거스름돈 반환</S.ChangeReturnButton>

    </S.Wrapper>
  );
};

export default Detail;
