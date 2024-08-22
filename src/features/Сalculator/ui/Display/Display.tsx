import React, { FC } from "react";

import * as styles from './Display.styles';

interface DisplayProps {
    value: string;
    originalExpression: string;
  }
  
  export const Display: FC<DisplayProps> = ({ value, originalExpression }) => {
    const isError = value.startsWith('Error');

    return(
    <styles.Display>
      <styles.Result isError={isError}>{value}</styles.Result>
      <styles.Separator/ >
      {originalExpression && (
        <styles.SmallText>{originalExpression}</styles.SmallText>
      )}
    </styles.Display>
  );
};