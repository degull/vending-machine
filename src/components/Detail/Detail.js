// Detail.js
import React, { useState } from 'react';
import * as S from './Detail.styled';

const Detail = () => {
  const [moneyInput, setMoneyInput] = useState(0);
  const [changeOutput, setChangeOutput] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const currencyUnits = [10, 50, 100, 500, 1000];
  const maxMoneyLimit = 5000;
  const maxTotalMoney = 7000;

  const handleMoneyInput = (value) => {
    const newMoneyInput = moneyInput + value;
    if (newMoneyInput <= maxTotalMoney) {
      setMoneyInput(newMoneyInput);
    }
  };

  const handleProductSelection = (productPrice) => {
    if (moneyInput >= productPrice) {
      const change = moneyInput - productPrice;
      setChangeOutput(change);
      setMoneyInput(0);
      setSelectedProduct(null);
    } else {
      // Handle insufficient funds
    }
  };

  return (
    <S.Wrapper>
      <div>
        {/* 잔돈 표시 */}
        <span>투입: {moneyInput}원</span><br />
        <span>거스름돈: {changeOutput}원</span>
      </div>

      <div>
        {/* 화폐 입력 버튼 */}
        {currencyUnits.map((unit) => (
          <button key={unit} onClick={() => handleMoneyInput(unit)}>
            {unit}원
          </button>
        ))}
      </div>

      <div>
        {/* 음료 선택 영역 */}
        <button onClick={() => handleProductSelection(450)}>물 (450원)</button>
        <button onClick={() => handleProductSelection(500)}>커피 (500원)</button>
        <button onClick={() => handleProductSelection(550)}>이온음료 (550원)</button>
        <button onClick={() => handleProductSelection(550)}>고급커피 (700원)</button>
        <button onClick={() => handleProductSelection(550)}>탄산음료 (750원)</button>
        <button onClick={() => handleProductSelection(550)}>특화음료 (800원)</button>
      </div>

      <S.Line1 />
      <S.TextImageContainer1>
        {/* 물 */}
        <S.WaterGroup>
          <S.WaterImage src="/img/water.png" alt="Water" />
          <S.WaterText>450원</S.WaterText>
        </S.WaterGroup>

        {/* 커피 */}
        <S.CoffeeGroup>
          <S.CoffeeImage src="/img/coffee.png" alt="Coffee" />
          <S.CoffeeText>500원</S.CoffeeText>
        </S.CoffeeGroup>

        {/* 이온음료 */}
        <S.SportsDrinkGroup>
          <S.SportsDrinkImage src="/img/sports_drink.png" alt="Sports Drink" />
          <S.SportsDrinkText>550원</S.SportsDrinkText>
        </S.SportsDrinkGroup>
      </S.TextImageContainer1>

      <S.Line2 />
      <S.TextImageContainer2>
        {/* 고급커피 */}
        <S.CoffeeStarGroup>
          <S.CoffeeStarImage src="/img/coffee_star.png" alt="Water" />
          <S.CoffeeStarText>700원</S.CoffeeStarText>
        </S.CoffeeStarGroup>

        {/* 탄산음료 */}
        <S.SparklingGroup>
          <S.SparklingImage src="/img/sparkling.png" alt="Water" />
          <S.SparklingText>750원</S.SparklingText>
        </S.SparklingGroup>

        {/* 특화음료 */}
        <S.SpecialGroup>
          <S.SpecialImage src="/img/special.png" alt="Water" />
          <S.SpecialText>800원</S.SpecialText>
        </S.SpecialGroup>
      </S.TextImageContainer2>
    </S.Wrapper>
  );
};

export default Detail;
