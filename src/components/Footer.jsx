import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container-fluid m-0 p-0 footer">
          <div className="row m-0 pt-2">
            <h5 className="font-poiret pt-1 ml-2 mr-auto">
              <b>Osama Rashid @ 2019</b>
            </h5>
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
      </footer>
    );
  }
}

export default Footer;
