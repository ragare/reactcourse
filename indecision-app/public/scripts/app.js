'use strict';

console.log('Visibility app is running....');

var appRoot = document.getElementById('app');

var app = {
    title: 'Visibilty app',
    visible: false,
    visibleMessage: 'This details are showing now',
    inVisibleMessage: 'There are details you cant see'
};

var onShowDetails = function onShowDetails() {
    app.visible = !app.visible;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.visible ? React.createElement(
            'p',
            null,
            app.visibleMessage
        ) : React.createElement(
            'p',
            null,
            app.inVisibleMessage
        ),
        React.createElement(
            'button',
            { onClick: onShowDetails },
            'Show details'
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
