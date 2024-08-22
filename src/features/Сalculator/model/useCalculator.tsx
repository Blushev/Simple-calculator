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
    const tokens = tokenize(expression);
    const result = parseTokens(tokens);

    if (isNaN(result)) {
      throw new Error("Invalid calculation");
    }

    let resultString = result.toString().replace(/\./g, ',');

    if (resultString.length > MAX_EXPRESSION_LENGTH) {
      resultString = resultString.slice(0, MAX_EXPRESSION_LENGTH - 3) + '...';
    }

    return resultString;
  } catch (error) {
    const errorMessage = (error as Error).message;

    if (errorMessage === "Division by zero") {
      return "Error: Division by zero";
    }
    return "Error";
  }
};
const tokenize = (expression: string): string[] => {
  const regex = /\d+(\,\d+)?|[+\-×/%√]/g;
  return expression.match(regex) || [];
};

const parseTokens = (tokens: string[]): number => {
  let stack: number[] = [];
  let operatorStack: string[] = [];

  const applyOperator = () => {
    const operator = operatorStack.pop();
    const b = stack.pop()!;
    const a = stack.pop()!;

    switch (operator) {
      case '+': stack.push(a + b); break;
      case '-': stack.push(a - b); break;
      case '×': stack.push(a * b); break;
      case '/': 
        if (b === 0) throw new Error("Division by zero");
        stack.push(a / b);
        break;
      case '%': stack.push(a % b); break;
      case '√': stack.push(Math.sqrt(b)); break;
    }
  };

  for (const token of tokens) {
    if (/\d/.test(token)) {
      stack.push(parseFloat(token.replace(',', '.')));
    } else if (operators.includes(token)) {
      while (operatorStack.length && precedence(operatorStack[operatorStack.length - 1]) >= precedence(token)) {
        applyOperator();
      }
      operatorStack.push(token);
    } else if (token === '√') {
      operatorStack.push(token);
    }
  }

  while (operatorStack.length) {
    applyOperator();
  }

  return stack[0];
};

const precedence = (operator: string): number => {
  switch (operator) {
    case '+':
    case '-':
      return 1;
    case '×':
    case '/':
    case '%':
      return 2;
    case '√':
      return 3;
    default:
      return 0;
  }
};