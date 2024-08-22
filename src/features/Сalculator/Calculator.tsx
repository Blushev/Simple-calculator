import React, { FC, useEffect, useState } from "react";

import { calculate, CalculatorState } from "./model/useCalculator";
import { ButtonPanel, Display } from "./ui";
import { mapKeyToLabel } from "./utils/keyHandler";

import * as styles from './Calculator.styles';

export const Calculator: FC = () => {

  const [state, setState] = useState<CalculatorState>({ expression: "0" });
  const [originalExpression, setOriginalExpression] = useState<string>("");

  const handleButtonClick = (label: string) => {
    const newState = calculate(state, label);

    if (label === "=") {
      setOriginalExpression(state.expression);
    }

    setState(newState);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const label = mapKeyToLabel(event.code);
      if (label) {
        handleButtonClick(label);
      }
    };
  
    window.addEventListener("keydown", handleKeyPress);
  
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleButtonClick]);

  return (
    <styles.Calculator>
      <Display value={state.expression} originalExpression={originalExpression} />
      <ButtonPanel onButtonClick={handleButtonClick} />
    </styles.Calculator>
  );
};