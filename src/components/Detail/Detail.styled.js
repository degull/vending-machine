import styled from "@emotion/styled";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
  position: relative;
`;

export const Line1 = styled.div`
  width: 300px;
  border-bottom: 10px solid gray;
  border-radius: 10px;
  margin: 0 0 -50px 0;
  
`;

export const Line2 = styled.div`
  width: 300px;
  border-bottom: 10px solid gray;
  border-radius: 10px;
  margin-top: 80px;
  margin-bottom: -50px;
`;

export const TextImageContainer1 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const WaterGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CoffeeGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SportsDrinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextImageContainer2 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const CoffeeStarGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SparklingGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SpecialGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WaterImage = styled.img`
  width: 30%;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;

&:hover {
  transform: scale(1.1);
}
`;

export const CoffeeImage = styled.img`
  width: 30%;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;

&:hover {
  transform: scale(1.1);
}
`;

export const SportsDrinkImage = styled.img`
  width: 30%;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;

&:hover {
  transform: scale(1.1);
}
`;

export const CoffeeStarImage = styled.img`
  width: 30%;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;

&:hover {
  transform: scale(1.1);
}
`;

export const SparklingImage = styled.img`
  width: 30%;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;

&:hover {
  transform: scale(1.1);
}
`;

export const SpecialImage = styled.img`
  width: 30%;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;

&:hover {
  transform: scale(1.1);
}
`;

export const WaterText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 30px;
`;

export const CoffeeText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 30px;
`;

export const SportsDrinkText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 30px;
`;

export const CoffeeStarText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 30px;
`;

export const SparklingText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 30px;
`;

export const SpecialText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 30px;
`;


export const MoneyInputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 70px 0;

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 10px;
    margin: 0 5px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
  }
`;