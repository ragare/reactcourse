"use strict";

console.log("React app is runnig!");

// JSX
var template = React.createElement(
  "h1",
  null,
  "Indecision App"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
