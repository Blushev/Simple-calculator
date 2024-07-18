import styled from "styled-components";
import { Colors } from "../../../../theme/Colors";

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

export const Result = styled.div`
  font-size: 46px;
  font-weight: bold;
`;

export const SmallText = styled.div`
  font-size: 18px;
`;

export const Separator = styled.div`
  height: 14px;
`;