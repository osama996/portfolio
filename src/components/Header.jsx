import React, { Fragment } from 'react'
import ProgressBar from 'progressbar.js'

class Header extends React.Component {

  onLoad = () => {
    const line = new ProgressBar.Line('.progress-container', {
        duration: 4000,
        easing: 'easeInOut',
        strokeWidth: 0.35,
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
        <div className="progress-container p-0 m-0">
        </div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top my-navbar"><a href="/#main" className="brand navbar-brand">Osama Rashid</a>
        </nav>
      </Fragment>
    )
  }
} 

export default Header;