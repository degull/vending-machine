// Detail.js
import React, { useState } from 'react';
import * as S from './Detail.styled';

const Detail = () => {
  const [moneyInput, setMoneyInput] = useState(0);
  const [changeOutput, setChangeOutput] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [moneyInserted, setMoneyInserted] = useState(false); // 화폐가 투입되었는지 여부

  const currencyUnits = [10, 50, 100, 500, 1000];
  const maxMoneyLimit = 5000;
  const maxTotalMoney = 7000;

  const handleMoneyInput = (value) => {
   const newMoneyInput = moneyInput + value;
   if (newMoneyInput <= maxTotalMoney) {
     setMoneyInput(newMoneyInput);
     setMoneyInserted(true); // 화폐가 투입되었음을 표시
   } else {
     alert("7000원 이상은 투입할 수 없습니다.");
   }
 };
 

 const handleProductSelection = (productPrice) => {
   if (moneyInput >= productPrice) {
     const change = moneyInput - productPrice;
     setChangeOutput(change);
     setMoneyInput(0);
     setSelectedProduct(null);
   } else {
     alert("잔액이 부족합니다.");
   }
 };

  const handleProductClick = (productPrice) => {
    handleProductSelection(productPrice);
  };

  const isProductAvailable = (productPrice) => {
   return moneyInput >= productPrice;
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
        <S.WaterGroup onClick={() => handleProductClick(450)}>
          <S.WaterImage src="/img/water.png" alt="Water" />
          <S.WaterText style={{ color: moneyInserted ? (isProductAvailable(450) ? 'green' : 'red') : 'black' }}>450원</S.WaterText>
         </S.WaterGroup>

        {/* 커피 */}
        <S.CoffeeGroup onClick={() => handleProductSelection(500)}>
          <S.CoffeeImage src="/img/coffee.png" alt="Coffee" />
          <S.CoffeeText style={{ color: moneyInserted ? (isProductAvailable(500) ? 'green' : 'red') : 'black' }}>500원</S.CoffeeText>
        </S.CoffeeGroup>

        {/* 이온음료 */}
        <S.SportsDrinkGroup onClick={() => handleProductSelection(550)}>
          <S.SportsDrinkImage src="/img/sports_drink.png" alt="Sports Drink" />
          <S.SportsDrinkText style={{ color: moneyInserted ? (isProductAvailable(550) ? 'green' : 'red') : 'black' }}>550원</S.SportsDrinkText>
        </S.SportsDrinkGroup>
      </S.TextImageContainer1>

      <S.Line2 />
      <S.TextImageContainer2>
        {/* 고급커피 */}
        <S.CoffeeStarGroup onClick={() => handleProductSelection(700)}>
          <S.CoffeeStarImage src="/img/coffee_star.png" alt="Water" />
          <S.CoffeeStarText style={{ color: moneyInserted ? (isProductAvailable(700) ? 'green' : 'red') : 'black' }}>700원</S.CoffeeStarText>
        </S.CoffeeStarGroup>

        {/* 탄산음료 */}
        <S.SparklingGroup onClick={() => handleProductSelection(750)}>
          <S.SparklingImage src="/img/sparkling.png" alt="Water" />
          <S.SparklingText style={{ color: moneyInserted ? (isProductAvailable(750) ? 'green' : 'red') : 'black' }}>750원</S.SparklingText>
        </S.SparklingGroup>

        {/* 특화음료 */}
        <S.SpecialGroup onClick={() => handleProductSelection(800)}>
          <S.SpecialImage src="/img/special.png" alt="Water" />
          <S.SpecialText style={{ color: moneyInserted ? (isProductAvailable(800) ? 'green' : 'red') : 'black' }}>800원</S.SpecialText>
        </S.SpecialGroup>
      </S.TextImageContainer2>


    </S.Wrapper>
  );
};

export default Detail;
