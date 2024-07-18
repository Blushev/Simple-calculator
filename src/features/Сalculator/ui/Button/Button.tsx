import React, { FC } from "react";

import * as styles from './Button.styles';

interface ButtonProps {
    label: string;
    onClick: (label: string) => void;
}

export const Button: FC<ButtonProps> = ({label, onClick}) => (
    label === "=" ? (
        <styles.ActiveButton onClick={() => onClick(label)}>
          {label}
        </styles.ActiveButton>
      ) : (
        <styles.Button onClick={() => onClick(label)}>
          {label}
        </styles.Button>
      )
);