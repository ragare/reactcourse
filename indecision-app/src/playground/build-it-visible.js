class Visibility extends React.Component {
    constructor(props) {
        super(props)
        this.toogleVisibility = this.toogleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    toogleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toogle</h1>
                <button onClick={this.toogleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {
                    this.state.visibility && (
                        <div>
                            <p>Hey. These are some details yo can now see!</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))

