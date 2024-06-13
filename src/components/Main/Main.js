/* import React, { useState, useEffect } from 'react';
import * as S from './Main.styled';
import { Link } from 'react-router-dom';


const Main = () => {
   return (
      <S.Wrapper>
         <S.MainImg src='/img/vending_machine.png'/>
         <Link to="/Detail/Detail">
            <S.MainText>주문하기</S.MainText>
         </Link>
      </S.Wrapper>
   );
};

export default Main;
 */
import React from 'react';
import * as S from './Main.styled';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <S.Wrapper>
      <S.MainImg src='/img/vending_machine.png'/>
      <Link to="/Detail">
        <S.MainText>주문하기</S.MainText>
      </Link>
      <Link to="/admin-password">
        <S.AdminText>관리자 모드</S.AdminText>
      </Link>
    </S.Wrapper>
  );
};

export default Main;
