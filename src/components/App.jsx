import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Error404 from './Error404';



function App(props) {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={MainSplash} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
