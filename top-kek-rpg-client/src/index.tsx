import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Main from './containers/Main';
import registerServiceWorker from './registerServiceWorker';
import { testReducer } from './reducers/index';
import { StoreState } from './types/index';

const store = createStore<StoreState>(testReducer, {
  testState: 'hello'
});

ReactDOM.render(
  <Provider store={store}>
    <Main />  
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
