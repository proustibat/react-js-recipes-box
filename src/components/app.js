// React
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Header, Admin, Card } from './';

// Recipes
import samples from '../recettes';

// firebase
import firebase from '../database';

class App extends React.Component {

    state = {
      recettes: {}
    };

    componentWillMount() {
        this.ref = firebase.syncState( `${ this.props.params.pseudo }/recettes`, {
                context: this,
                state: 'recettes'
            });
    }

    loadSamples() {
        this.setState( { recettes: samples } );
    }

    addRecipe( recette ) {
        const recettes = { ...this.state.recettes };
        const timestamp = Date.now();
        recettes[ `recette-${ timestamp }` ] = recette;
        this.setState( { recettes } );
    }

    updateRecipe( key, newRecette ) {
        const recettes = { ...this.state.recettes };
        recettes[ key ] = newRecette;
        this.setState( { recettes } );
    }

    deleteRecipe( key ) {
        const recettes = { ...this.state.recettes };
        recettes[ key ] = null;
        this.setState( { recettes } );
    }

    render() {

        const cards = Object
            .keys( this.state.recettes )
            .map( key =>
                 <Card key={ key } details={ this.state.recettes[ key ] } />
            );

        return (
            <div className="container box-recipes">
                <Header pseudo={ this.props.params.pseudo } />
                <div className="cards">
                    { cards }
                </div>
                    <Admin
                        currentPagePseudo={this.props.params.pseudo}
                        recettes={ this.state.recettes }
                        loadSamples={ this.loadSamples.bind( this ) }
                        addRecipe={ this.addRecipe.bind( this ) }
                        updateRecipe={ this.updateRecipe.bind( this ) }
                        deleteRecipe={ this.deleteRecipe.bind( this ) }
                    />
            </div>
        )
    }


    componentWillUnMount() {
       firebase.removeBinding( this.ref );
    }

    static propTypes = {
        params: PropTypes.shape({
            pseudo: PropTypes.string.isRequired,
        })
    }
}

export default App;
