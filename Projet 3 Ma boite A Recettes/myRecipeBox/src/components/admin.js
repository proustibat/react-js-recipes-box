import React from 'react';

// components
import { AddRecipe } from './';

class Admin extends React.Component {

    onChangeRecipe( key, event ) {
        const recette = this.props.recettes[ key ];
        const updatedRecipe = {
            ...recette,
            [ event.target.name ]: event.target.value
        };

        this.props.updateRecipe( key, updatedRecipe );
    }

    renderAdmin( key ) {
        const recette = this.props.recettes[ key ];
        return (
            <div className="card" key={ key } >
                <form className="admin-form">
                    <input
                        type="text"
                        name="nom"
                        placeholder="Nom de la recette"
                        value={ recette.nom }
                        onChange={ this.onChangeRecipe.bind(this, key) }
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="Adresse de l'image"
                        value={ recette.image }
                        onChange={ this.onChangeRecipe.bind(this, key) }
                    />
                    <textarea
                        name="ingredients"
                        rows="3"
                        placeholder="Liste des ingrédients"
                        value={ recette.ingredients }
                        onChange={ this.onChangeRecipe.bind(this, key) }
                    />
                    <textarea
                        name="instructions"
                        rows="15"
                        placeholder="Liste des instructions"
                        value={ recette.instructions }
                        onChange={ this.onChangeRecipe.bind(this, key) }
                    />

                </form>
                <button onClick={ this.props.deleteRecipe.bind( this, key ) }>Supprimer</button>
            </div>
        );
    }

    render() {

        const adminCards = Object.keys( this.props.recettes ).map( this.renderAdmin.bind( this ) );

        return (
            <div className="cards">
                <AddRecipe
                    addRecipe={ this.props.addRecipe.bind( this ) }
                    updateRecipe={ this.props.updateRecipe.bind( this ) }
                />
                { adminCards }
                <footer>
                    <button onClick={ this.props.loadSamples.bind( this ) }>Load Samples</button>
                </footer>
            </div>
        );
    }

    static propTypes = {
        recettes: React.PropTypes.object.isRequired,
        loadSamples: React.PropTypes.func.isRequired,
        addRecipe: React.PropTypes.func.isRequired,
        updateRecipe: React.PropTypes.func.isRequired,
        deleteRecipe: React.PropTypes.func.isRequired,
    }

}

export default Admin;