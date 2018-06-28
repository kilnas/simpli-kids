import React from 'react';

var Component = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <div className="container">
        <div className="jumbotron">Simpli Kids</div>
      </div>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default Component;
