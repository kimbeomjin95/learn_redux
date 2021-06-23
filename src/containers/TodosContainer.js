import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos'; // 액션 생성함수 호출

function TodosContainer() {
  const todos = useSelector(state => state.todos);

  // 추후 액션을 dispatch 할 수 있음(액션 생성 함수)
  const dispatch = useDispatch();

  // 재사용할 수 있도록 useCallback
  // ESLint 규칙상 deps에 dispatch를 넣은 것
  const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  // 이 컴포넌트에서 렌더링하는 것은 Todos 컴포넌트
  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />

}

export default TodosContainer;