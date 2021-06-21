// action type 선언
const ADD_TODO = 'todos/ADD_TODO'; // 구별하기 위한 접두사 입력
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// action 생성함수(export) 선언
let nextId = 1;
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text
  }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
});

// 초기상태 생성
const initialState = [

];

// reducer 생성(export default)
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo); // 초기값이 배열이기 때문에 바로 concat사용
    case TOGGLE_TODO:
    return state.map(
      todo => todo.id === action.id
        ? { ...todo, done: !todo.done  }
        : todo
    );
    default:
      return state;
  }
}