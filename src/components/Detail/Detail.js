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

  const handleProductClick = (productPrice) => {
    handleProductSelection(productPrice);
  };

  return (
    <S.Wrapper>
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
        <S.WaterGroup onClick={() => handleProductClick(450)}>
          <S.WaterImage src="/img/water.png" alt="Water" />
          <S.WaterText>450원</S.WaterText>
        </S.WaterGroup>

        {/* 커피 */}
        <S.CoffeeGroup onClick={() => handleProductClick(500)}>
          <S.CoffeeImage src="/img/coffee.png" alt="Coffee" />
          <S.CoffeeText>500원</S.CoffeeText>
        </S.CoffeeGroup>

        {/* 이온음료 */}
        <S.SportsDrinkGroup onClick={() => handleProductClick(550)}>
          <S.SportsDrinkImage src="/img/sports_drink.png" alt="Sports Drink" />
          <S.SportsDrinkText>550원</S.SportsDrinkText>
        </S.SportsDrinkGroup>
      </S.TextImageContainer1>

      <S.Line2 />
      <S.TextImageContainer2>
        {/* 고급커피 */}
        <S.CoffeeStarGroup onClick={() => handleProductClick(700)}>
          <S.CoffeeStarImage src="/img/coffee_star.png" alt="Water" />
          <S.CoffeeStarText>700원</S.CoffeeStarText>
        </S.CoffeeStarGroup>

        {/* 탄산음료 */}
        <S.SparklingGroup onClick={() => handleProductClick(750)}>
          <S.SparklingImage src="/img/sparkling.png" alt="Water" />
          <S.SparklingText>750원</S.SparklingText>
        </S.SparklingGroup>

        {/* 특화음료 */}
        <S.SpecialGroup onClick={() => handleProductClick(800)}>
          <S.SpecialImage src="/img/special.png" alt="Water" />
          <S.SpecialText>800원</S.SpecialText>
        </S.SpecialGroup>
      </S.TextImageContainer2>

      <div>
        {/* 잔돈 표시 */}
        <span>투입: {moneyInput}원</span><br />
        <span>거스름돈: {changeOutput}원</span>
      </div>
    </S.Wrapper>
  );
};

export default Detail;
