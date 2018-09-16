import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import '../App.css'

class Landing extends Component{
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className = "landing-grid">
        <Cell col={12}>
          <img
          src = "https://www.griclub.org/assets/images/avatar_male.jpg"
          alt = "avatar"
          className = "avatar-img" />

          <div className="banner-text"><h1>Computer Engineer</h1>
          <hr />
          <p>HTML/CSS | Bootstrap | Javascript | React | NodeJS</p>

            <div className ="social-links">
            {/* Linkedin */}
            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin-square fa-5x" aria-hidden="true" />
            </a>

            {/* Github */}
            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github-square fa-5x" aria-hidden="true" />
            </a>
            </div>
          </div>
        </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
