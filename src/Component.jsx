import React from 'react';
import HomePage from './pages/HomePage.js'
import PopUp from "./PopUp";
import autobind from "auto-bind"


export default class Component extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      text: "Hello there",
      showEventPopUp: true
    }

    autobind(this)
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">Simpli Kids</div>
        <HomePage />
        {this.state.showEventPopUp && <PopUp text={this.state.text} />}
      </div>
    );
  }

};