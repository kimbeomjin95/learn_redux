import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 루트 reducer 생성(두개 리듀서 합치기)
const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;