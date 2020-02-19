import React from 'react';
import './App.css';
import Movies from './components/Movies/Movies'
import Details from './components/Details'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/movie/:id" exact component={Details} />
        </Switch>

      </div>
    </Router>
  );
}

// const Home = () => (
//   <div>
//     <h1></h1>
//   </div>
// )

export default App;
