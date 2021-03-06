import React from 'react';

//프리젠테이셔널 컴포넌트: 리덕스 스토어에 직접적으로 접근하지 않고 필요한 값 또는 함수를 props 로만 받아와서 사용하는 컴포넌트
// UI를 선언하는 것에 집중하며 필요한 값이나 함수는 props를 받아서 사용함
function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {

  const onChange = e => {
    onSetDiff(parseInt(e.target.value, 10));
  }

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} onChange={onChange} />
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
