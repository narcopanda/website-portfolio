import React, {Component} from 'react'
import Projects from './Projects';
import Profiles from './SocialProfiles';
import profile from '../assets/profile.png.jpg'
import Title from './Title';
import Educations from './Education'
import {Button, ButtonToolbar} from 'react-bootstrap';

class App extends Component{
  state = {
    displayBio: false
  }

  toggleDisplayBio = () => {
    this.setState({
      displayBio: !this.state.displayBio
    })
  }

  render() {
        return(
            <div>
              <img src={profile} alt='profile' className='profile'/>
                <h1>Hello!</h1>
                <p>My name is Sean. </p>
                <Title />
                <p>I will code for pizza and coffee</p>
                {
                  this.state.displayBio ? (
                    <div>
                      <p>I hate my life</p>
                      <p>another line</p>
                      <p>next line</p>
                      {/* <ButtonToolbar> */}
                      <Button variant="secondary" onClick={this.toggleDisplayBio}>Show less</Button>
                      {/* </ButtonToolbar> */}

                    </div>
                  ): (
                    <div>

                      {/* <ButtonToolbar> */}
                      <Button varinat="primary" onClick={this.toggleDisplayBio}>Read more</Button>
                      {/* </ButtonToolbar> */}

                    </div>
                  )
                }
              <hr />
              <Educations />
              <hr />
              <Projects />
              <hr />
              <Profiles />
            </div>
        )
    }
}



export default App
