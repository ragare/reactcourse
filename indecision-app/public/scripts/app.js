console.log("React app is runnig!");

// JSX
// var template = <p>This is JSX from app.js</p>;
var template = React.createElement("p", {
    id: "mp"
}, "This is JSX from app.js");
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);
