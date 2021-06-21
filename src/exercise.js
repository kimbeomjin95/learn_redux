import { createStore } from 'redux'; // store를 만들어 주는 함수

// 상태 초기값 정의
const initialState = {
  counter: 0,
  text: '',
  list: []
};

// action타입 정의(대문자 작성)
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// action 생성 함수1
// function increase() {
//   return {
//     type: 'INCREASE'
//   }
// }

// action 생성 함수2(대부분 작성법), 소문자 작성
// 화살표 함수로 작성시 return 생략 가능
const increase = () => ({
  type: INCREASE
});

//
const decrease = () => ({
  type: DECREASE
});

// 언더바(_)는 카멜케이스로 작성
const changeText = (text) => ({
  type: CHANGE_TEXT,
  text
});


const addToList = (item) => ({
  type: ADD_TO_LIST,
  item
});

// reducer 작성(기본형태)
// initialState가 필요한 이유는 redux에서 초기상태를 만들 때 reducer를 호출하는데 state가 undefined면 
// default의 return 값이 undefined가 되기 때문이며 이렇게 해야 redux의 초기상태가 만들어짐
function reducer(state = initialState, action) { // state의 기본값 설정
  switch(action.type) {
    case INCREASE:
      return {
        ...state, // 기존값 유지를 위한
        counter: state.counter + 1
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      }
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      }
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item) // 기존 리스트 배열에 새로운 아이템을 추가
      }
    default:
      return state;
  }
}

// 스토어 생성
const store = createStore(reducer);
console.log(store.getState()); // 스토어 안에 있는 상태를 조회

// store subscribe을 위한 listener 생성
const listener = () => {
  const state = store.getState();
  console.log(state);
}

// 스토어 구독 등록
const unsubscribe = store.subscribe(listener);

// 스토어 구독 해제 
// unsubscribe();

// 구독을 하고 나서 action들을 dispatch하면 action이 dispatch될때마다 console에 현재상태가 출력됨
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({
  id: 1,
  text: '와우'
}));

// store 인스턴스를 console에서 사용할 수 있음
window.store = store;

// unsubscribe를 호출하고 나서는 action이 dispatch해도 콘솔에 찍히지 않음
window.unsubscribe = unsubscribe;

// 앞으로 react를 사용할 때 subscribe, getState를 직접적으로 사용하지 않음