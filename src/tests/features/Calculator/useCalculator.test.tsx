import { calculate, CalculatorState } from "../../../features/Сalculator/model/useCalculator";

import '@testing-library/jest-dom/extend-expect';

describe('calculate', () => {
  it('should reset expression when "C" is pressed', () => {
    const initialState: CalculatorState = { expression: '123' };
    const newState = calculate(initialState, 'C');
    expect(newState.expression).toBe('0');
  });

  it('should evaluate the expression when "=" is pressed', () => {
    const initialState: CalculatorState = { expression: '2+2' };
    const newState = calculate(initialState, '=');
    expect(newState.expression).toBe('4');
  });

  it('should append numbers to the expression', () => {
    const initialState: CalculatorState = { expression: '2' };
    const newState = calculate(initialState, '3');
    expect(newState.expression).toBe('23');
  });

  it('should not exceed the maximum expression length', () => {
    const initialState: CalculatorState = { expression: '1234567890123' };
    const newState = calculate(initialState, '4');
    expect(newState.expression).toBe('1234567890123');
  });

  it('should replace the expression if it is "Error"', () => {
    const initialState: CalculatorState = { expression: 'Error' };
    const newState = calculate(initialState, '1');
    expect(newState.expression).toBe('1');
  });

  it('should handle decimal points correctly', () => {
    const initialState: CalculatorState = { expression: '0' };
    const newState = calculate(initialState, '.');
    expect(newState.expression).toBe('0,');
  });

  it('should handle square root correctly', () => {
    const initialState: CalculatorState = { expression: '√9' };
    const newState = calculate(initialState, '=');
    expect(newState.expression).toBe('3');
  });

  it('should handle operators correctly', () => {
    const initialState: CalculatorState = { expression: '2' };
    const newState = calculate(initialState, '+');
    expect(newState.expression).toBe('2+');
  });

  it('should concatenate the operators "+" and "-" correctly', () => {
    const initialState: CalculatorState = { expression: '2+' };
    const newState = calculate(initialState, '-');
    expect(newState.expression).toBe('2+-');
  });

  it('should evaluate complex expressions correctly', () => {
    const initialState: CalculatorState = { expression: '2+2×2' };
    const newState = calculate(initialState, '=');
    expect(newState.expression).toBe('6');
  });

  it('should handle division by zero gracefully', () => {
    const initialState: CalculatorState = { expression: '2/0' };
    const newState = calculate(initialState, '=');
    expect(newState.expression).toBe('Error: Division by zero');
  });
});