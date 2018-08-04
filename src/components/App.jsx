import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './Header'
import Main from './Main'
import About from './About'
import Contact from './Contact'

class App extends React.Component {

  render() {
    return (
      <Router>
        <Fragment>
            <Header />
            {/* <Route render={() => <Main /> } />
            <Route render={() => <About /> } />
            <Route render={() => <Contact /> } /> */}
        </Fragment>
      </Router>
    );
  }
}

export default App;
