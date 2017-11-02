import * as React from 'react';
import * as alias from './types/alias';
import * as actions from './actions/index';

const logo = require('./logo.svg');

interface AppProps {
  testValue: alias.Value;
  onTest: (item: alias.Value) => actions.TestAction;
}
class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
