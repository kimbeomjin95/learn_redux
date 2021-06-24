// 컨테이너 컴포넌트란: 리덕스 스토어의 상태를 조회(useSelector)하거나, 액션을 디스패치 할 수 있는 컴포넌트를 의미함 
// 그리고, HTML 태그들을 사용하지 않고 다른 프리젠테이셔널 컴포넌트들을 불러와서 사용
import React from 'react';
import { bindActionCreators } from 'redux'
import Counter from '../components/Counter';
import { connect } from 'react-redux'; // 상태 조회 시 
import { decrease, increase, setDiff } from '../modules/counter';

// connect를 Hook과 달리 props를 통해서 원하는 값, 함수를 받아올 수 있음
function CounterContainer({
  number, diff, increase, decrease, setDiff
}) {
  return (
   <Counter 
    number={number}
    diff={diff}
    onIncrease={increase}
    onDecrease={decrease}
    onSetDiff={setDiff}
   />
  );
}

// connect를 사용하기 위해선 2가지 함수 필요(객체로 선언해야 함)
const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff
})

// const mapDispatchToProps = dispatch => ({
//   // 함수를 만들건데, 무엇을 dispatch할거냐, increase()호출해서 액션객체를 만들고 이걸 dispatch 할 것 
//   onIncrease: () => dispatch(increase()),
//   onDecrease: () => dispatch(decrease()),
//   onSetDiff: diff => dispatch(setDiff(diff))
// })

// 위의 하나 하나 선언 및 호출한 것을 아래 bindActionCreators으로 대체할 수 있음
// mapDispatchToProps가 함수 타입이 아닌 객체 타입으로 하게 된다면 bindActionCreators가 connect 내부에서 이루어져서 바로 사용할 수 있음(객체이면 자동적용)
const mapDispatchToProps = (
  {
    increase,
    decrease,
    setDiff
  }
);

// 같은 의미
// const enhance = connect(mapStateToProps, mapDispatchToProps)
// export default enhance(CounterContainer)
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

