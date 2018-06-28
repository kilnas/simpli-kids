import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component';
import PopUp from './PopUp'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

window.onload = () => {
  ReactDOM.render(
    <Component />,
    document.querySelector('#container')
  );
};
