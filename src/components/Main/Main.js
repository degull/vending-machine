import React, { useState, useEffect } from 'react';
import * as S from './Main.styled';
import { Link } from 'react-router-dom';


const Main = () => {
   return (
      <S.Wrapper>
         <S.MainImg src='/img/vending_machine.png'/>
         <Link to="/Detail/Detail">
            <S.mainText>주문하기</S.mainText>
         </Link>
      </S.Wrapper>
   );
};

export default Main;
