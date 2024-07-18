import React, { FC } from "react";
import { Calculator } from "../../features/Сalculator/Calculator";

import * as styles from "./CalculatorPage.styles";

export const CalculatorPage: FC = () => (
  <styles.CalculatorContainer>
    <styles.CalculatorWrapper>
      <Calculator />
    </styles.CalculatorWrapper>
  </styles.CalculatorContainer>
);
