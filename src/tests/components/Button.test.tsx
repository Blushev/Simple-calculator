import React from "react";
import { render, fireEvent } from "@testing-library/react";

import '@testing-library/jest-dom/extend-expect';

import { Button } from "../../features/Сalculator/ui/Button/Button";

describe("Button component", () => {
  it("renders normal button correctly", () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button label="+" onClick={mockOnClick} />
    );

    const button = getByText("+");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith("+");
  });

  it("renders active button correctly", () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button label="=" onClick={mockOnClick} />
    );

    const activeButton = getByText("=");
    expect(activeButton).toBeInTheDocument();

    fireEvent.click(activeButton);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith("=");
  });
});