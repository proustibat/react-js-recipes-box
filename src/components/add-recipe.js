import React from 'react';


class AddRecipe extends React.Component {

    state = {};

    formRefs = {};

    addRecipe( event ) {
        event.preventDefault();
        const recette = {
            nom: this.formRefs.nom.value,
            image: this.formRefs.image.value,
            ingredients: this.formRefs.ingredients.value,
            instructions: this.formRefs.instructions.value,
        };
        this.props.addRecipe( recette );
        this.formRefs.form.reset();
    }

    render() {
        return (
            <div className="card" >
                <form className="admin-form ajouter-recette"
                      ref={ input => this.formRefs.form = input }
                      onSubmit={ this.addRecipe.bind( this ) }
                >
                    <input
                        ref={ input => this.formRefs.nom = input }
                        type="text"
                        placeholder="Nom de la recette" />
                    <input
                        ref={ input => this.formRefs.image = input }
                        type="text"
                        placeholder="Adresse de l'image" />
                    <textarea
                        ref={ input => this.formRefs.ingredients = input }
                        rows="3"
                        placeholder="Liste des ingrédients séparés par une virgule" />
                    <textarea
                        ref={ input => this.formRefs.instructions = input }
                        rows="15"
                        placeholder="Liste des instructions (une par ligne)" />
                    <button type="submit">+ Ajouter une recette</button>
                </form>
            </div>
        );
    }


    static propTypes = {
        addRecipe: React.PropTypes.func.isRequired,
    }

}


export default AddRecipe;