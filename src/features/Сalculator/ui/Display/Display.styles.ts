import styled, { css, keyframes } from "styled-components";
import { Colors } from "../../../../theme/Colors";

const shakeAnimation = keyframes`
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
`;

interface DisplayProps {
  isError?: boolean;
}

export const Display = styled.div`
  display: flex;
  flex-direction: column-reverse;

  font-family: Arial;
  background: ${Colors.Transparent};
  font-size: 48px;
  color: ${Colors.White};
  text-align: right;
  width: 92%;
  height: 180px;
  margin: 0 auto 20px auto;
  padding: 10px;
  border-bottom: 1px solid ${Colors.PoloBlue};

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 10px;
  }
`;

export const Result = styled.div<DisplayProps>`
  font-size: 46px;
  font-weight: bold;

  ${({ isError }) =>
    isError &&
    css`
      color: ${Colors.RedOrange};
      animation: ${shakeAnimation} 0.3s ease-in-out;
    `}
`;

export const SmallText = styled.div`
  font-size: 18px;
`;

export const Separator = styled.div`
  height: 14px;
`;
