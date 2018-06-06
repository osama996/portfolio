import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div id="about" className="container-fluid about-container px-0 pt-3 m-0">
        <div className="row py-5 m-0">
          <div className="container col-md-5 text-center px-3"><img src="../images/my-img2.jpg" alt='profile' className="myAboutImg"/></div>
          <div className="container col-md-5 px-3">
            <p className="p-3">
              I'm a 22 years old student living in Berlin since 2015.
              I'm studying web development at the digital career institute (DCI) in Berlin.
            </p>
          </div>
        </div>
        <div className="row py-5 m-0">
          <div className="container col-md-6 ml-auto text-center">
            <h2 className="mt-5 mb-2">Technologies that I use :</h2>
            <hr/>
            <div className="row m-0 p-3">
              <ul className="list-group tech-list mx-auto">
                <li className="list-group-item tech-list-item">JAVASCRIPT (ES6)</li>
                <li className="list-group-item tech-list-item">JQUERY</li>
                <li className="list-group-item tech-list-item">BOOTSTRAP</li>
                <li className="list-group-item tech-list-item">EXPRESS</li>
              </ul>
              <ul className="list-group tech-list mx-auto">
                <li className="list-group-item tech-list-item">REACT</li>
                <li className="list-group-item tech-list-item">NODE</li>
                <li className="list-group-item tech-list-item">MONGO DB</li>
                <li className="list-group-item tech-list-item">GIT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;