import React from "react";
import { Line } from "rc-progress";

class About extends React.Component {
  render() {
    return (
      <div className="container-fluid about-container m-0 mt-5">
        <div className="row m-0 my-5">
          <div className="container col-12 col-md-4 col-lg-4 mx-auto mt-4 px-1">
            <h3 className="px-1">About me</h3>
            <hr />
            <p className="p-2 font-poiret-p">
              I’m a 23 years old​ web developer​ from Iraq, living in Berlin
              since 2015.
              <br />
              I’ve studied full-stack web development at the Digital Career
              Institute in Berlin.
              <br />
              Learning JavaScript, React and Node.js,​ empowered me to build
              future web applications. I’m passionate about what I do and I’m
              always challenging myself.
              <br />
              Learning more and more is always my goal.
              <br />A strong passion and enthusiasm distinguish my work.
              <br />
            </p>
          </div>
          <div className="container col-12 col-md-5 col-lg-5 mx-auto mt-4 px-1 pt-0">
            <h3 className="px-1">My Skillset</h3>
            <hr />
            <div className="row m-0 p-0">
              <ul className="list-group tech-list mx-auto col-12 col-md-6 col-lg-6">
                <li className="list-group-item tech-list-item font-poiret-p">
                  JAVASCRIPT
                  <Line
                    percent="80"
                    trailWidth="3"
                    trailColor="#AB96B8"
                    strokeWidth="3"
                    strokeColor="#AD1400"
                  />
                </li>
                <li className="list-group-item tech-list-item font-poiret-p">
                  HTML & CSS
                  <Line
                    percent="76"
                    trailWidth="3"
                    trailColor="#AB96B8"
                    strokeWidth="3"
                    strokeColor="#AD1400"
                  />
                </li>
                <li className="list-group-item tech-list-item font-poiret-p">
                  JQUERY
                  <Line
                    percent="63"
                    trailWidth="3"
                    trailColor="#AB96B8"
                    strokeWidth="3"
                    strokeColor="#AD1400"
                  />
                </li>
                <li className="list-group-item tech-list-item font-poiret-p">
                  EXPRESS
                  <Line
                    percent="66"
                    trailWidth="3"
                    trailColor="#AB96B8"
                    strokeWidth="3"
                    strokeColor="#AD1400"
                  />
                </li>
              </ul>
              <ul className="list-group tech-list mx-auto col-12 col-md-6 col-lg-6">
                <li className="list-group-item tech-list-item font-poiret-p">
                  REACT
                  <Line
                    percent="75"
                    trailWidth="3"
                    trailColor="#AB96B8"
                    strokeWidth="3"
                    strokeColor="#AD1400"
                  />
                </li>
                <li className="list-group-item tech-list-item font-poiret-p">
                  REACT NATIVE
                  <Line
                    percent="55"
                    trailWidth="3"
                    trailColor="#AB96B8"
                    strokeWidth="3"
                    strokeColor="#AD1400"
                  />
                </li>
                <li className="list-group-item tech-list-item font-poiret-p">
                  NODE
                  <Line
                    percent="72"
                    trailWidth="3"
                    trailColor="#AB96B8"
                    strokeWidth="3"
                    strokeColor="#AD1400"
                  />
                </li>
                <li className="list-group-item tech-list-item font-poiret-p">
                  MONGO DB
                  <Line
                    percent="71"
                    trailWidth="3"
                    trailColor="#AB96B8"
                    strokeWidth="3"
                    strokeColor="#AD1400"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row m-0 my-5">
          <div className="container col-7 col-md-4 col-lg-4 mx-auto mt-5 text-center">
            <h3>My Work</h3>
            <hr />
          </div>
          <div className="row m-0 mt-5">
            <div className="container col-12 col-md-4 col-lg-3 mx-auto mb-4">
              <h3>
                <i className="fa fa-laptop basic-color" aria-hidden="true" />{" "}
                Frontend
              </h3>
              <p className="p-2 font-poiret-p">
                Building the visual parts of the app, from prototypes and
                mockups to a valuable product using the latest technologies and
                frameworks such as JavaScript(ES6), HTML5, CSS3 & SASS, React
                and Bootstrap 4. With a focus to create responsive websites that
                work on a wide range of devices to assist the production of
                clean and functional design.
              </p>
            </div>
            <div className="container col-12 col-md-4 col-lg-3 mx-auto mb-4">
              <h3>
                <i className="fa fa-server basic-color" aria-hidden="true" />{" "}
                Backend
              </h3>
              <p className="p-2 font-poiret-p">
                Where the logic starts.
                <br />
                Using my intensive Node.js, Express and MongoDB Knowledge I'll
                create, connect and maintain your websites back-end by building
                the core functionality of the application.
                <br />
                And deliver secure and reliable software.
              </p>
            </div>
            <div className="container col-12 col-md-4 col-lg-3 mx-auto">
              <h3>
                <i className="fa fa-briefcase basic-color" aria-hidden="true" />{" "}
                Other
              </h3>
              <p className="p-2 font-poiret-p">
                #ReactNative #SEO #redux #webpack #npm #AJAX #mongoose
                #agileMethodology #teamPlayer #motivation #projectManagement
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
