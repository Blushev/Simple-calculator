import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { ButtonPanel } from '../../features/Сalculator/ui/ButtonPanel/ButtonPanel';
import { buttons } from '../../features/Сalculator/ui/ButtonPanel/constants';

describe("ButtonPanel component", () => {
  it("renders all buttons correctly", () => {
    const mockOnButtonClick = jest.fn();
    const { getByText } = render(
      <ButtonPanel onButtonClick={mockOnButtonClick} />
    );

    buttons.flat().forEach(label => {
      const button = getByText(label);
      expect(button).toBeInTheDocument();

      fireEvent.click(button);
      expect(mockOnButtonClick).toHaveBeenCalledTimes(1);
      expect(mockOnButtonClick).toHaveBeenCalledWith(label);

      mockOnButtonClick.mockClear();
    });
  });
});