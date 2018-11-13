import React, { Component } from 'react';
import './App.css';

class Clock extends Component{
  constructor(props) {
    super(props);
    this.state={
      days: 0,
      hours:0,
      minutes:0,
      seconds:0
    }
    //console.log(this.props);
  }

  // componentWillMount(){
  //   this.getTimeUntil(this.props.deadline);
  // }

  //in tutorial used of componentWillMount() which is old version
  componentDidMount(){
    this.getTimeUntil(this.props.deadline);
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  getTimeUntil(deadLine){
    //define const for variable that doese not need the change
    const time = Date.parse(deadLine) - Date.parse(new Date());
    //console.log('time', time);
    var seconds = Math.floor((time/1000) % 60 );
    var minutes = Math.floor((time/(1000*60)) % 60 );
    var hours = Math.floor((time/(1000*60*60)) % 24 );
    var days = Math.floor(time/(1000*60*60*24));
    //console.log(seconds, minutes, hours, days);
    this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds});
  }

  leadingZero(num){
    return num < 10 ? '0' + num : num;
  }

  render() {
    return(
      <div>
        <div className="Clock-days">{this.leadingZero(this.state.days)} days</div>
        <div className="Clock-hours">{this.leadingZero(this.state.hours)} hours</div>
        <div className="Clock-minutes">{this.leadingZero(this.state.minutes)} minutes</div>
        <div className="Clock-seconds">{this.leadingZero(this.state.seconds)} seconds</div>
      </div>
    );
  }
}

export default Clock;
