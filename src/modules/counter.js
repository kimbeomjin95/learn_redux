// action type 선언
const SET_DIFF = 'counter/SET_DIFF'; // SET_DIFF: counter에서 몇씩 더할지 설정
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action 생성함수  선언
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기상태(reducer에서 관리할)
const initialState = {
  number: 0,
  diff: 1 // 몇씩 더하는지에 대한 설정
};

// reducer 생성
// reducer를 작성할 때는 export default를 사용
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      }
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      }
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      }
    default:
      return state;
  }
}