const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 타입 생성

export const setDiff = (data) => ({ type: SET_DIFF, data });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//액션 생성 함수

const initialState = {
  number: 0,
  value: 1,
};

export default function Counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        value: action.data,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.value,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.value,
      };
    default:
      return state;
  }
}
