import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
  position: relative;
`;

export const MainImg = styled.img`
  width: 700px;
  height: auto;
`;

export const mainText = styled.div`
  color: #9c8;
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  position: absolute;
  top: 35%;
  left: 78%;
  transform: translate(-50%, -50%);
  font-family: 'Ownglyph_meetme-Rg';
  @font-face {
    font-family: 'Ownglyph_meetme-Rg';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
  cursor: pointer;
`;