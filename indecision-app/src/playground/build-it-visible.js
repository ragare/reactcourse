console.log('Visibility app is running....');

const appRoot = document.getElementById('app');

const app = {
    title: 'Visibilty app',
    visible: false,
    visibleMessage: 'This details are showing now',
    inVisibleMessage: 'There are details you cant see'
};

const onShowDetails = ()=> {
    app.visible = !app.visible;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.visible ? <p>{app.visibleMessage}</p> : <p>{app.inVisibleMessage}</p>}
            <button onClick={onShowDetails}>Show details</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();