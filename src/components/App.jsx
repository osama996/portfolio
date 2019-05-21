import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import About from "./About";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Route render={() => <About />} />
          <Route render={() => <Footer />} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
