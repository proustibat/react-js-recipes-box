// React
import React from 'react';

// Components
import { Header, Admin, Card } from '../components';

// Recipes
import samples from '../recettes';

// database
import database from '../database';

class App extends React.Component {

    state = {
      recettes: {}
    };

    componentWillMount() {
        this.ref = database.syncState( `${ this.props.params.pseudo }/recettes`, {
                context: this,
                state: 'recettes'
            });
    }

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
                { cards.length === 0 && <Admin loadSamples={ this.loadSamples.bind( this ) } /> }
            </div>
        )
    }


    componentWillUnMount() {
       database.removeBinding( this.ref );
    }

    static propTypes = {
        params: React.PropTypes.shape({
            pseudo: React.PropTypes.string.isRequired
        })
    }
}

export default App;
