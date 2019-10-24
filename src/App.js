// import React from 'react';
// import './App.css';
// import Counter from './Counter';

// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import Counter from './Counter';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

export class App extends Component {
  componentDidMount() {
    console.log('a');
    this.interval = setTimeout(() => console.log('wawues'), 1000);
  }

  componentWillUnmount() {
    console.log('aa');
  }

  componentWillMount() {
    console.log('willmount');
    clearInterval(this.interval);
  }
  render() {
    return (
      <Router>
        <Link to="/me">Click here</Link>
        <Route exact path="/" component={Counter} />
        <Route exact path="/me" component={Counter} />
      </Router>
    );
  }
}

export default App;
