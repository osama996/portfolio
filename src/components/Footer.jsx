import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container-fluid m-0 p-0 footer">
          <div className="row m-0 p-0 pt-1 justify-content-between">
            <div className="container col-6 col-md-3 col-lg-3 m-0 p-0 text-left">
              <p className="font-poiret pt-2 ml-2">
                <b>Osama Rashid @ 2019</b>
              </p>
            </div>
            <div className="container col-6 col-md-4 col-lg-4 m-0 p-0 text-right">
              <a
                className="mr-3"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/osama996"
              >
                <h3>
                  <i className="fa fa-github" aria-hidden="true" />
                </h3>
              </a>
              <a
                className="mr-3"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/osama_fayoni"
              >
                <h3>
                  <i className="fa fa-instagram" aria-hidden="true" />
                </h3>
              </a>
              <a
                className="mr-3"
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/osama-rashid-669773157/"
              >
                <h3>
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </h3>
              </a>
              <a
                className="mr-3"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.xing.com/profile/Osama_Rashid5/cv"
              >
                <h3>
                  <i className="fa fa-xing" aria-hidden="true" />
                </h3>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
