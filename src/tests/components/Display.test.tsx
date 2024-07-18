import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Display } from '../../features/Сalculator/ui/Display/Display';

describe("Display component", () => {
    it("renders value correctly", () => {
      const { getByText } = render(
        <Display value="123.45" originalExpression="" />
      );
  
      const valueElement = getByText("123.45");
      expect(valueElement).toBeInTheDocument();
    });
  
    it("renders original expression correctly when provided", () => {
      const { getByText } = render(
        <Display value="100" originalExpression="2 × 50" />
      );
  
      const originalExpressionElement = getByText("2 × 50");
      expect(originalExpressionElement).toBeInTheDocument();
    });
  
    it("does not render original expression when not provided", () => {
      const { queryByText } = render(
        <Display value="50" originalExpression="" />
      );
  
      const originalExpressionElement = queryByText("2 × 50");
      expect(originalExpressionElement).toBeNull();
    });
  });