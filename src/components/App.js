import React, {Component} from 'react'
import Projects from './Projects';
import Profiles from './SocialProfiles';
import profile from '../assets/profile.jpg'
import Title from './Title';
import Educations from './Education'
// eslint-disable-next-line
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
                      <p>I'm from Albany, New York</p>
                      <p>I love working on challenging projets</p>
                      <p>This website was made with React</p>
                      {/* <ButtonToolbar> */}
                      <Button variant="primary" onClick={this.toggleDisplayBio}>Show less</Button>
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
