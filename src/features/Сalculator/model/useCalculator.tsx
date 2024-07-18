import { operators } from "./constants";

export interface CalculatorState {
  expression: string;
}

const MAX_EXPRESSION_LENGTH = 13;

export const calculate = (state: CalculatorState, label: string): CalculatorState => {
  switch (label) {
    case 'C':
      return { expression: '0' };

    case '=':
      return { expression: evaluateExpression(state.expression) };

      default:
        let newExpression = state.expression;
  
        if (newExpression.length >= MAX_EXPRESSION_LENGTH) {
          return { expression: newExpression };
        }
        
        if (state.expression === 'Error') {
          if (!operators.includes(label)) {
            newExpression = label;
          }
        } else if (state.expression === '0') {
          if (label === '.') {
            newExpression = '0,';
          } else if (label === '√') {
            newExpression = '√';
          } else if (operators.includes(label)) {
            if (label === '+' || label === '-') {
              newExpression = label;
            } else {
              newExpression = '0' + label;
            }
          } else {
            newExpression = label;
          }
        } else {
          const lastChar = state.expression[state.expression.length - 1];
          
          if (label === '√' && operators.includes(lastChar)) {
            newExpression += '√';
          } else if (operators.includes(lastChar) && operators.includes(label)) {
            if ((lastChar === '+' || lastChar === '-') && (label === '+' || label === '-')) {
              newExpression = state.expression + label;
            } else {
              newExpression = state.expression.slice(0, -1) + label;
            }
          } else {
            newExpression += label;
          }
        }
  
        return { expression: newExpression };
    }
  };
  
  const evaluateExpression = (expression: string): string => {
    try {
      let sanitizedExpression = expression
        .replace(/×/g, '*')
        .replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)')
        .replace(/,/g, '.');
  
      sanitizedExpression = sanitizedExpression.replace(/Math.sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');
  
      const result = new Function(`return ${sanitizedExpression}`)();
      
      return parseFloat(result.toFixed(10)).toString().replace(/\./g, ',');
    } catch {
      return "Error";
    }
  };