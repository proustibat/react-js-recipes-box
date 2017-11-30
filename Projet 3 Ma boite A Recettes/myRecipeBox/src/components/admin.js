import React from 'react';

// components
import { AddRecipe } from './';

class Admin extends React.Component {

    render() {
        return (
            <div className="cards">
                <AddRecipe addRecipe={ this.props.addRecipe.bind( this ) }/>
                <footer>
                    <button onClick={ this.props.loadSamples.bind( this ) }>Load Samples</button>
                </footer>
            </div>
        );
    }

    static propTypes = {
        loadSamples: React.PropTypes.func.isRequired,
        addRecipe: React.PropTypes.func.isRequired
    }

}

export default Admin;