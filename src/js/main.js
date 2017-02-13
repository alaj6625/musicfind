/**
 * Created by allena on 12/29/16.
 */
var App = require ('./components/App');
var React = require('react');
var ReactDOM = require('reac-dom');
var AppAPI = require('./utils/appAPI.js');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

