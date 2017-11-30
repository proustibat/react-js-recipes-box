// React
import React from 'react';

// Components
import { Header, Admin, Card } from '../components';

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

        const cards = Object
            .keys( this.state.recettes )
            .map( key =>
                 <Card key={ key } details={ this.state.recettes[ key ] } />
            );

        return (
            <div className="box">
                <Header pseudo={ this.props.params.pseudo } />
                <div className="cards">
                    { cards }
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
