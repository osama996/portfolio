import React from 'react'

class Main extends React.Component {
  render() {
    return (
      <div id="main" className="container-fluid main-container p-0 m-0">
        <div className="row m-0">
          <div className="container mx-auto main-content">
            <div className="row m-0">
              <div className="col-md-6 col-sm-12 mx-auto text-center">
                <h1>Hello</h1><br/>
                <p>I'm Osama, a full-stack web Developer based in Berlin.</p>
              </div>
            </div>
            <div className="row m-0">
              <div className="col-md-6 col-sm-12 mx-auto text-center main-downicon">
                <h1><a href="#about"><i aria-hidden="true" className="fa fa-angle-double-down"></i></a></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default Main;