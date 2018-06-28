import React from 'react';
import HomePage from './pages/HomePage.js'
import PopUp from "./PopUp";

var Component = React.createClass({
  getInitialState: function() {
    return {message: 'Hello!'};
  },

  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <div className="container">
        <div className="jumbotron">Simpli Kids</div>
        <HomePage />
      </div>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default Component;
