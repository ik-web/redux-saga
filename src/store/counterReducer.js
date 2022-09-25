const defaultState = {
  counter: 0
}

export const PLUS = 'PLUS';
export const ASYNC_PLUS = 'ASYNC_PLUS';
export const MINUS = 'MINUS';
export const ASYNC_MINUS = 'ASYNC_MINUS';

export const counterReduser = (state = defaultState, action) => {
  switch (action.type) {
    case PLUS:
      return {...state, counter: state.counter + 1}

    case MINUS:
      return {...state, counter: state.counter - 1}

    default:
      return state;
  }
}

export const plusOneAction = () => ({ type: PLUS});
export const minusOneAction = () => ({ type: MINUS});
export const asyncPlusOneAction = () => ({ type: ASYNC_PLUS});
export const asyncMinusOneAction = () => ({ type: ASYNC_MINUS});
