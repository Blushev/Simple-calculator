import styled from "styled-components";
import { Colors } from "../../theme/Colors";

export const CalculatorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, ${Colors.MonaLisa} 0%, ${Colors.Salmon} 100%);
`;

export const CalculatorWrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 10px;
  }
`;
