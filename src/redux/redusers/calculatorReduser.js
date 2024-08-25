const initialState = {
    visible: '0',
    number: null,
    previousNumber: null,
    operator: null,
    isDecimal: false,
    error: null,
    final: false,
}
function enterNumbers(state, action) {
    if (!state.final) {
        if (action.payload.number !== '.') {
            let newState = state.number === null || state.number === '0' ? {...state, number: action.payload.number}: {...state, number: state.number + action.payload.number};
            return {
                ...newState,
                visible: newState.number
            }
        } else {
            if (state.isDecimal) {
                return state
            } else {
                let newState = state.number === null || state.number === '0' ? {...state, number: '0' + action.payload.number}: {...state, number: state.number + action.payload.number};
                return {
                    ...newState,
                    visible: newState.number,
                    isDecimal: true,
                }
            }
        }
    } else {
        if (action.payload.number !== '.') {
            let newState = {
                number: action.payload.number,
                previousNumber: null,
                operator: null,
                isDecimal: false,
                error: null,
                final: false,
            }
            return {
                ...newState,
                visible: newState.number
            }
        } else {
            let newState = {
                number: '0.',
                previousNumber: null,
                operator: null,
                isDecimal: true,
                error: null,
                final: false,
            }
            return {
                ...newState,
                visible: newState.number
            }
        }
    }
}
function resetNumber(state) {
    if (state.previousNumber) {
        let newState = state.number === null || state.number === '0' ? initialState : {...state, number: '0'}
        return {
            ...newState,
            visible: '0',
            isDecimal: false,
        }
    } else {
        let newState = state.number === null || state.number === '0' ? initialState : {...state, number: null}
        return {
            ...newState,
            visible: '0',
            isDecimal: false,
        }
    }
}
function addOperator(state, action) {
    if (state.operator) {
        if (state.number === null) {
            return {
                ...state,
                operator: action.payload.operator,
            }
        } else {
            const result = calculateResult(state.number, state.previousNumber, state.operator);
            return {
                number: null,
                operator: action.payload.operator,
                previousNumber: result,
                isDecimal: !Number.isInteger(result),
                visible: result,
                final: false,
            }
        }
    } else {
        if (state.number === null) {
            return {...state, operator: action.payload.operator, previousNumber: '0'}
        } else  {
            return state.previousNumber ? {...state, operator: action.payload.operator} : {...state, operator: action.payload.operator, previousNumber: state.number, visible: state.number, number: null, final: false,}
        }

    }
}
function applyOperations(number1, number2, operator) {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        default:
            return number2;
    }
}
function calculateResult(state) {
    const number1 = parseFloat(state.previousNumber);
    const number2 = parseFloat(state.number);
    if (number2 === 0 && state.operator === '/') {
        return {
            ...initialState,
            visible: 'ERROR'
        }
    } else {
        const result = applyOperations(number1, number2, state.operator).toString()
        return {
            number: result,
            operator: null,
            previousNumber: null,
            isDecimal: !Number.isInteger(result),
            visible: result,
            final: true,
        }
    }
}
function calculatePercent(state) {
    let result;
    const number1 = parseFloat(state.previousNumber);
    const number2 = number1 * parseFloat(state.number) / 100;
    switch (state.operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2 ;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            result = number2;
    }
    return {
        number: result,
        operator: null,
        previousNumber: null,
        isDecimal: !Number.isInteger(result),
        visible: result,
        final: true,
    }
}
function removeLastDigit(state) {
    let number;
    if (state.number.length === 1) {
        number = '0';
    } else {
        number = state.number.slice(0, -1);
    }
    return {...state, number: number, visible: number}
}
const calculatorReduser = (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case 'ENTER_NUMBER':
            nextState = enterNumbers(state, action)
            // localStorage.setItem('calculatorState', JSON.stringify(nextState))
            return nextState;

        case 'BACKSPACE':
            nextState = removeLastDigit(state)
            // localStorage.setItem('calculatorState', JSON.stringify(nextState))
            return nextState;

        case 'RESET_NUMBER':
            nextState = resetNumber(state)
            // localStorage.setItem('calculatorState', JSON.stringify(nextState))
            return nextState;

        case 'ADD_OPERATOR':
            nextState = addOperator(state, action)
            // localStorage.setItem('calculatorState', JSON.stringify(nextState))
            return nextState;

        case 'GET_RESULT':
            nextState = calculateResult(state)
            // localStorage.setItem('calculatorState', JSON.stringify(nextState))
            return nextState;

        case 'CHANGE_SIGN':
            nextState = {...state, number: state.number*(-1), visible: state.number*(-1)}
            // localStorage.setItem('calculatorState', JSON.stringify(nextState))
            return nextState

        case 'GET_PERCENT':
            nextState = calculatePercent(state)
            //localStorage.setItem('calculatorState', JSON.stringify(nextState))
            return nextState;
        default:
            return state
    }
}
export default calculatorReduser;