import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './app.less';

const reducers = combineReducers({
  thread: (state: object = {}, action) => {
    if (action.type === 'SET_CURRENT_THREAD') {
      return {
        ...state,
        ...action.thread,
      };
    }
    return state;
  },
});

const store = createStore(reducers);

class App extends Component {
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
