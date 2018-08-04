import React, { Fragment } from 'react'
import ProgressBar from 'progressbar.js'

class Header extends React.Component {

  onLoad = () => {
    const line = new ProgressBar.Line('.progress-container', {
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 0.2,
        from: {color: '#941100'},
        to: {color: '#EDB200'},
        step: function(state, bar, attachment) {
          bar.path.setAttribute('stroke', state.color);
        }
    });

    line.animate(1);
  };

  componentDidMount() {
    this.onLoad()
  }

  render() {
    return (
      <Fragment>
        <div className="progress-container p-0 m-0"></div>
        <section className="intro-section">
          <div className="container">
            <div className="row">
              <div className="col-md-1 col-lg-2" />
              <div className="col-md-10 col-lg-8">
                <div className="intro">
                  <div className="profile-img"><img src="images/my-img.jpg" alt /></div>
                  <h2><b>Osama Rashid</b></h2>
                  <h4 className="font-yellow">Junior Web Developer</h4>
                  <ul className="information mt-4">
                    <li><b>BORN: </b>October 10, 1996</li>
                    <li><b>EMAIL: </b>osama27rashid@gmail.com</li>
                  </ul>
                  <ul className="social-icons">
                    <li><a target='_blank' href="https://www.instagram.com/osama_fayoni"><i class="fa fa-instagram" aria-hidden="true" /></a></li>
                    <li><a target='_blank' href="https://linkedin.com/in/osama-rashid-669773157/"><i class="fa fa-linkedin" aria-hidden="true" /></a></li>
                    <li><a target='_blank' href="https://www.xing.com/profile/Osama_Rashid5/cv"><i class="fa fa-xing" aria-hidden="true" /></a></li>
                    <li><a target='_blank' href="https://github.com/osama996"><i class="fa fa-github" aria-hidden="true" /></a></li>
                  </ul>
                </div>{/* intro */}
              </div>{/* col-sm-8 */}
            </div>{/* row */}
          </div>{/* container */}
        </section>{/* intro-section */}
      </Fragment>
    )
  }
} 

export default Header;