// 컨테이너 컴포넌트란: 리덕스 스토어의 상태를 조회(useSelector)하거나, 액션을 디스패치 할 수 있는 컴포넌트를 의미함 
// 그리고, HTML 태그들을 사용하지 않고 다른 프리젠테이셔널 컴포넌트들을 불러와서 사용
import React from 'react';
import Counter from '../components/Counter';

// react component에서 redux를 연동할 때는 useSelector, useDispatch를 사용
import { useSelector, useDispatch, shallowEqual } from 'react-redux'; // 상태 조회 시 
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
  // state: store.getState();의 반환하는 객체상태가 state로 옴, 리덕스의 현재 상태  

  // useSelector에서 매번 새로운 객체를 만들고 있기 때문에 다른 컨테이너가 렌더링됨
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
    // 최적화 방법2 - useSelector의 두번째 파라미터의 이전상태와 다음상태를 비교하는 함수를 만듬
  }), // (left, right) => {
    // return left.diff === right.diff && left.number === right.number

    // 최적화 방법3 
    shallowEqual  
  );

  // 최적화 방법1 - useSelector를 여러번 선언 및 하나의 상태만 조회
  // const number = useSelector(state => state.counter.number);
  // const diff = useSelector(state => state.counter.diff);

  // 언제든 dispatch를 사용해서 dispatch를 발생시킬 수 있음
  // action을 dispatch할 때는 useDispatch 사용 
  const dispatch = useDispatch();

  // action 생성 함수(호출되면 action 객체가 만들어지므로 dispatch가 됨)
  const onIncrease = () => dispatch(increase()); // modules/counter
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
   <Counter 
    number={number}
    diff={diff}
    onIncrease={onIncrease}
    onDecrease={onDecrease}
    onSetDiff={onSetDiff}
   />
  );
}

export default CounterContainer;
