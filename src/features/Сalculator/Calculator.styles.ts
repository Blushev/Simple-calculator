import styled from "styled-components";
import { Colors } from "../../theme/Colors";

export const Calculator = styled.div`
  background: linear-gradient(145deg, ${Colors.Endeavour}, ${Colors.RoyalBlue});
  border-radius: 20px;
  padding: 20px;
  width: 440px;
  margin: auto;
  text-align: center;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15),
    0px 20px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 10px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    padding: 5px;
  }
`;
