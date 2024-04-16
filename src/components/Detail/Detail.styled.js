// Detail.styled.js
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  position: relative;
`;

export const Line1 = styled.div`
  width: 300px; 
  border-bottom: 10px solid gray;
  position: absolute;
  top: 80px;
  border-radius: 10px;
`;

export const Line2 = styled.div`
  width: 300px; 
  border-bottom: 10px solid gray;
  position: absolute;
  top: 200px;
  border-radius: 10px;
`;

export const TextImageContainer1 = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 30px; /* 수정된 부분: Line1 위에 위치하도록 수정 */
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
`;

export const WaterGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CoffeeGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SportsDrinkGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const coffee_starGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const sparklingGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const specialGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

export const WaterText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 29px;
  cursor: default;
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

export const CoffeeText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 29px;
  cursor: default;
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

export const SportsDrinkText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 29px;
  cursor: default;
`;


export const coffee_starImage = styled.img`
  width: 30%;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;

&:hover {
transform: scale(1.1);
}
`;

export const coffee_starText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 29px;
  cursor: default;
`;

export const sparklingImage = styled.img`
  width: 30%;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;

&:hover {
transform: scale(1.1);
}
`;

export const sparklingText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 29px;
  cursor: default;
`;

export const specialImage = styled.img`
  width: 30%;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;

&:hover {
transform: scale(1.1);
}
`;

export const specialText = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 29px;
  cursor: default;
`;



export const TextImageContainer2 = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
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

export const CoffeeStarText = styled.div`
  font-size: 12px;
  font-weight: bold;
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

export const SparklingText = styled.div`
  font-size: 12px;
  font-weight: bold;
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

export const SpecialText = styled.div`
  font-size: 12px;
  font-weight: bold;
  transition: transform 0.3s ease;

&:hover {
transform: scale(1.1);
}
`;