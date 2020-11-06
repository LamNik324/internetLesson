import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './App.css';
import Bar from '../Bar'
import Foo from '../Foo'
import Main from '../Main'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/foo' exact>
            <Bar />
          </Route>
          <Route path='/bar' exact>
            <Foo />
          </Route>
          <Route path='/' exact>
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
