import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  position: relative;
`;

export const Line = styled.div`
  width: 300px; 
  border-bottom: 10px solid gray;
  position: absolute;
  top: 50px;
  border-radius: 10px;
`;