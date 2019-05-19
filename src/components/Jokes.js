import React, {Component} from 'react';
import {Button} from 'react-bootstrap'
import axios from 'axios';

const Joke = ({joke}) => {
  const { setup, punchline} = joke
  return <p style={{ margin: 20}}>{setup} <em>{punchline}</em></p>
}

class Jokes extends Component {
  state = { joke: {} , jokes: []}

  componentDidMount() {
    //fetch('https://official-joke-api.appspot.com/random_joke')
    //.then(res => res.json())
    //.then(json => console.log('json', json))
    axios.get('https://official-joke-api.appspot.com/random_joke')
      .then(res => {
        this.setState({ joke: res.data })
      })
      .catch(res => alert(res.status))
  }

  getJokes = () => {
    axios.get('https://official-joke-api.appspot.com/random_ten')
      .then(res => {
        this.setState({ jokes: res.data })
      })
      .catch(res => alert(res.message))
  }

  render(){
    return (
      <div>
        <h2>Higlighted Joke</h2>
        <Joke joke={this.state.joke}/>
        <hr />
      <h3>Want ten new jokes</h3>
      <Button varinat="primary" onClick={this.getJokes}>Click me</Button>
      {
        this.state.jokes.map(x => {
          return <Joke key={x.id} joke={x} />
        })
      }
      </div>
    );
  }
}

export default Jokes
