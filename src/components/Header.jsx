import React, { Fragment } from "react";
import ProgressBar from "progressbar.js";
import myImg from "../images/my-img.jpg";

class Header extends React.Component {
  onLoad = () => {
    const line = new ProgressBar.Line(".progress-container", {
      duration: 3000,
      easing: "easeInOut",
      strokeWidth: 0.2,
      from: { color: "#941100" },
      to: { color: "#FFA804" },
      step: function(state, bar) {
        bar.path.setAttribute("stroke", state.color);
      }
    });
    line.animate(1);
  };

  componentDidMount() {
    this.onLoad();
  }

  render() {
    return (
      <Fragment>
        <div className="progress-container p-0 m-0" />
        <section className="intro-section">
          <div className="container">
            <div className="row">
              <div className="mx-auto col-md-9 col-lg-8">
                <div className="intro">
                  <div className="profile-img">
                    <img src={myImg} alt="my profile img" />
                  </div>
                  <h2 className="font-poiret">
                    <b>Osama Rashid</b>
                  </h2>
                  <h5 className="basic-color">Web Developer</h5>
                  <div className="information mt-4 p-0">
                    <h6>
                      <i className="fa fa-home" aria-hidden="true" /> Berlin,
                      Germany
                    </h6>
                    <h6>
                      <i className="fa fa-envelope" aria-hidden="true" />{" "}
                      Osama@fayoni.me
                    </h6>
                  </div>
                </div>
                {/* intro */}
              </div>
              {/* col-lg-8 */}
            </div>
            {/* row */}
          </div>
          {/* container */}
        </section>
        {/* intro-section */}
      </Fragment>
    );
  }
}

export default Header;
