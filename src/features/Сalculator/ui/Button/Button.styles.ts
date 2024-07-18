import styled from "styled-components";
import { Colors } from "../../../../theme/Colors";

export const Button = styled.button`
  width: 86px;
  border: none;
  border-radius: 50%;
  background: ${Colors.Transparent};
  color: ${Colors.White};
  font-size: 24px;
  padding: 24px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    transition: none;
  }

  &:active::after {
    animation: ripple-animation 0.4s ease-out;
  }

  @keyframes ripple-animation {
    0% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 10px;
  }
`;

export const ActiveButton = styled(Button)`
  font-weight: bold;
  background-color: ${Colors.White};
  color: ${Colors.RoyalBlue};
`;