import React from 'react';

class Admin extends React.Component {

    render() {
        return (
            <div className="cards">
                <footer>
                    <button onClick={ this.props.loadSamples }>Load Samples</button>
                </footer>
            </div>
        );
    }

    static propTypes = {
        loadSamples: React.PropTypes.func.isRequired
    }

}

export default Admin;