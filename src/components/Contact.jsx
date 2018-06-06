import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <div id="contact" className="container-fluid contact-container m-0 p-0">
        <div className="row m-0 p-0">
          <div className="container mx-auto my-5 contact-form p-0">
            <form className="m-0 p-3">
              <div className="form-group row m-0 p-1">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input id="inputEmail3" type="email" placeholder="Email" className="form-control"/>
                </div>
              </div>
              <div className="form-group row m-0">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input id="inputPassword3" type="password" placeholder="Password" className="form-control"/>
                </div>
              </div>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input id="gridRadios1" type="radio" name="gridRadios" value="option1" checked="" className="form-check-input"/>
                      <label htmlFor="gridRadios1" className="form-check-label">First radio</label>
                    </div>
                    <div className="form-check">
                      <input id="gridRadios2" type="radio" name="gridRadios" value="option2" className="form-check-input"/>
                      <label htmlFor="gridRadios2" className="form-check-label">Second radio</label>
                    </div>
                    <div className="form-check disabled">
                      <input id="gridRadios3" type="radio" name="gridRadios" value="option3" disabled="" className="form-check-input"/>
                      <label htmlFor="gridRadios3" className="form-check-label">Third disabled radio</label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="form-group row m-0">
                <div className="col-sm-2">Checkbox</div>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input id="gridCheck1" type="checkbox" className="form-check-input"/>
                    <label htmlFor="gridCheck1" className="form-check-label">Example checkbox</label>
                  </div>
                </div>
              </div>
              <div className="form-group row m-0">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;