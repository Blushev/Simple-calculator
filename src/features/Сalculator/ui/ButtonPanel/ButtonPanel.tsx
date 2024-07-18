import React, { FC } from "react";
import { Button } from "../Button/Button";
import { buttons } from "./constants";

import * as styles from './ButtonPanel.styles';

interface ButtonPanelProps {
  onButtonClick: (label: string) => void;
}

export const ButtonPanel: FC<ButtonPanelProps> = ({ onButtonClick }) => (
  <styles.ButtonPanel>
    {buttons.flat().map((label, index) => (
      <Button
        key={index}
        label={label}
        onClick={() => onButtonClick(label)}
      />
    ))}
  </styles.ButtonPanel>
);
