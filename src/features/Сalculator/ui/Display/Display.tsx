import React, { FC } from "react";

import * as styles from './Display.styles';

interface DisplayProps {
    value: string;
    originalExpression: string;
  }
  
  export const Display: FC<DisplayProps> = ({ value, originalExpression }) => (
    <styles.Display>
      <styles.Result>{value}</styles.Result>
      <styles.Separator/ >
      {originalExpression && (
        <styles.SmallText>{originalExpression}</styles.SmallText>
      )}
    </styles.Display>
  );