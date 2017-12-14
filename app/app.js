var React = require('react');
var ReactDOM = require('react-dom');

var objectOne = {
  name: 'Gayan',
  location: 'Sri Lanka'
};

var objectTwo = {
  age: 30,
  ...objectOne
};

console.log(objectTwo);

ReactDOM.render(
  <h1>React Boilderplate</h1>,
  document.getElementById('app')
);