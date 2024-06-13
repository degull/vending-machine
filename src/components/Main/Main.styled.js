import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

export const MainImg = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;
`;

export const MainText = styled.div`
  color: #9c8;
  font-size: 11px;
  font-weight: 800;
  text-align: center;
  position: absolute;
  top: 22%;
  left: 65.5%;
  transform: translate(-50%, -50%);
  font-family: 'Ownglyph_meetme-Rg';
  @font-face {
    font-family: 'Ownglyph_meetme-Rg';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  cursor: pointer;
  font-weight: bold;
  transition: font-size 0.3s ease;

  &:hover {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    top: 51%;
    left: 60.5%;
  }
`;

export const AdminText = styled.div`
  color: #f00;
  font-size: 11px;
  font-weight: 800;
  text-align: center;
  position: absolute;
  top: 36%;
  left: 65.5%;
  transform: translate(-50%, -50%);
  font-family: 'Ownglyph_meetme-Rg';
  @font-face {
    font-family: 'Ownglyph_meetme-Rg';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  cursor: pointer;
  font-weight: bold;
  transition: font-size 0.3s ease;

  &:hover {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    top: 61%;
    left: 60.5%;
  }
`;
