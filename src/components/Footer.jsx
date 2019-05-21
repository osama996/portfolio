import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container-fluid m-0 p-0 pt-1 footer">
          <div className="row m-0 p-0 pt-1 justify-content-between">
            <div className="container col-12 col-md-3 col-lg-3 m-0 p-0 pt-2 text-center">
              <p className="font-poiret pt-1">
                <b>Osama Rashid @ 2018</b>
              </p>
            </div>
            <div className="container col-12 col-md-4 col-lg-4 m-0 p-0 pt-2 text-center">
              <a
                className="mr-4"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/osama996"
              >
                <h2>
                  <i className="fa fa-github" aria-hidden="true" />
                </h2>
              </a>
              <a
                className="mr-4"
                target="_blank"
                rel="noopener noreferrer"
                href="https://codepen.io/dashboard?type=view&opts_itemType=pen&opts_filter=all&opts_orderBy=id&opts_orderDirection=0&opts_tag=0&displayType=grid&previewType=iframe&page=0"
              >
                <h2>
                  <i className="fa fa-codepen" aria-hidden="true" />
                </h2>
              </a>
              <a
                className="mr-4"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/osama_fayoni"
              >
                <h2>
                  <i className="fa fa-instagram" aria-hidden="true" />
                </h2>
              </a>
              <a
                className="mr-4"
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/osama-rashid-669773157/"
              >
                <h2>
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </h2>
              </a>
              <a
                className="mr-3"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.xing.com/profile/Osama_Rashid5/cv"
              >
                <h2>
                  <i className="fa fa-xing" aria-hidden="true" />
                </h2>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
