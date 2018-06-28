import React from 'react';
import HomePage from './pages/HomePage.js';
import PopUp from "./PopUp";
import autobind from "auto-bind"

import Menu from './Menu.jsx';

export default class Component extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: "Hello there",
      message: 'Hello!',
      creditScore: 0,
      level: 0,
      savings: 0,
      showEventPopUp: false
    }

    autobind(this)
  }

  render() {
    return (
      <div className="container">
      <Menu level={this.state.level} creditScore={this.state.creditScore} savings={this.state.savings} />
        <div className="jumbotron">Simpli Kids</div>
        <HomePage />
        {this.state.showEventPopUp && <PopUp text={this.state.text} />}
      </div>
    );
  }

};