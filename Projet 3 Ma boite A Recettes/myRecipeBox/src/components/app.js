// React
import React from 'react';

// Components
import { Header, Admin } from '../components';

// Recipes
import samples from '../recettes';

class App extends React.Component {

    state = {
      recettes: {}
    };

    loadSamples() {
        this.setState( { recettes: samples } );
    }

    render() {
        return (
            <div className="box">
                <Header pseudo={ this.props.params.pseudo } />
                <div className="cards">
                    <div className="card" />
                </div>

                <Admin loadSamples={ this.loadSamples.bind( this ) } />
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
