import React from 'react';
import HomePage from './pages/HomePage.js';
import PopUp from "./PopUp";
import Menu from './Menu.jsx';

var Component = React.createClass({
  getInitialState: function() {
    return {
      message: 'Hello!',
      creditScore:0,
      level:0,
      savings:0
    };
  },

  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <div className="container">
      <Menu level={this.state.level} creditScore={this.state.creditScore} savings={this.state.savings} />
        <div className="jumbotron">Simpli Kids</div>
        <HomePage />
        {/*<PopUp />*/}
        
      </div>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default Component;
