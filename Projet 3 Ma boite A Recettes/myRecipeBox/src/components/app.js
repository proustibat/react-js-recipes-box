// React
import React from 'react';

class App extends React.Component {

    render() {
        return (
            <div className="box">
                <h1>{ this.props.params.pseudo }</h1>
                <div className="cards">
                    <div className="card" />
                </div>
            </div>
        )
    }

    static propTypes = {
        params: React.PropTypes.shape({
            pseudo: React.PropTypes.string.isRequired
        })
    }
}

export default App;