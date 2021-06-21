import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // react프로젝트에서 redux적용
import { createStore } from 'redux';  // reducer를 파라미터로 넣기 위한
import rootReducer from './modules' // modules dir 불러오면 index.js를 불러옴

const store = createStore(rootReducer);
// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    {/* 리액트 컴포넌트 어디서든지 store를 사용할 수 있음 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
