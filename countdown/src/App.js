import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'November 10, 2019',
      newDeadLine : ''
    }
  }

  changeDeadLine() {
    //this.setState({deadline: 'October 15, 2018'});
    //console.log(this.state);
    this.setState({deadline: this.state.newDeadLine});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
          <Clock
            deadline = {this.state.deadline}

          />
        <Form inline>
          <FormControl
            className = "deadline-input"
            placeholder="newdate"
        //  onChange = {event => console.log(event.target.value)}
           onChange={event => this.setState({newDeadLine: event.target.value})}
          />
          <Button onClick={() => this.changeDeadLine()}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default App;
