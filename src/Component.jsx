import React from 'react';
import PopUp from "./PopUp";

var Component = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <div className="container">
        <div className="jumbotron">
          <p>Simpli Kidsasdsdfs</p>
        </div>
        <PopUp />
      </div>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default Component;
