// Detail.js
import React from 'react';
import * as S from './Detail.styled';

const Detail = () => {
   return (
      <S.Wrapper>
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
            <S.coffee_starGroup>
               <S.coffee_starImage src="/img/coffee_star.png" alt="Water" />
               <S.coffee_starText>700원</S.coffee_starText>
            </S.coffee_starGroup>

            {/* 탄산음료 */}
            <S.sparklingGroup>
               <S.sparklingImage src="/img/sparkling.png" alt="Water" />
               <S.sparklingText>750원</S.sparklingText>
            </S.sparklingGroup>

            {/* 특화음료 */}
            <S.specialGroup>
               <S.specialImage src="/img/special.png" alt="Water" />
               <S.specialText>750원</S.specialText>
            </S.specialGroup>
         </S.TextImageContainer2>
      </S.Wrapper>
   );
};

export default Detail;
