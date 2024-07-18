import styled from "styled-components";

export const ButtonPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 480px) {
    grid-gap: 5px;
  }
`;