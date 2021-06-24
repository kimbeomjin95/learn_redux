import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos'; // 액션 생성함수 호출

function TodosContainer({ todos, addTodo, toggleTodo }) {

  // 재사용할 수 있도록 useCallback
  // ESLint 규칙상 deps에 dispatch를 넣은 것
  const onCreate = useCallback(text => addTodo(text), [addTodo]);
  const onToggle = useCallback(id => toggleTodo(id), [toggleTodo]);

  // 이 컴포넌트에서 렌더링하는 것은 Todos 컴포넌트
  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
}

// 꼭 객체 형태로 리턴해야 함
const mapStateToProps = state => ({ todos: state.todos })
const mapDispatchToProps = {
  addTodo,
  toggleTodo
};

// CounterContainer와 다르게 이런식으로도 할 수 있음
// 그렇지만 훅을 사용하는 것이 메인이기 때문에 간으하면 훅을 사용을 권장
// 클래스 컴포넌트에서는 coonnect를 사용하면 되고 함수형 컴포넌트에서는 coonnect를 사용할 이유가 없음 
// 그러므로 메인으로는 훅을 사용하기
export default connect(
  state => ({ todos: state.todos }), 
  {
  addTodo,
  toggleTodo
  }
)(TodosContainer);