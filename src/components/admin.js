import React from 'react';
import PropTypes from 'prop-types';

// components
import { AddRecipe } from './';

// firebase
import firebase from '../database';



class Admin extends React.Component {

    state = {
        uid: null,
        owner: null
    };

    componentDidMount() {
        firebase.onAuth( user => user ? this.onLoginDone( null, { user } ) : false );
    }

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

    renderLogin() {

        return (
            <div className="login">
                <h2>Connecte toi pour créer tes recettes !</h2>
                <button
                    className="facebook-button"
                    onClick={ this.login.bind(this, 'facebook') }
                >
                    Me connecter avec Facebook
                </button>
                <button
                    className="twitter-button"
                    onClick={ this.login.bind(this, 'twitter') }
                >
                    Me connecter avec Twitter
                </button>
            </div>
        );
    }

    login( provider ) {
        firebase.authWithOAuthPopup( provider, this.onLoginDone.bind( this ) );
    }

    logout() {
        firebase.unauth();
        this.setState({
            uid: null
        })
    }

    onLoginDone( err, authData ) {

        if( err ) {
            console.log( err );
            return;
        }

        // Recuperer le nom du proprietaire de la base
        const ownerRef = firebase.database().ref( this.props.currentPagePseudo );

        // Demande a firebase si l'utilisateur a des recettes
        ownerRef.once('value', snapshot => {

            const data = snapshot.val() || {};

            // si la page n'appartient a personne, on l'attribue a l'utilisateur
            if( !data.owner ) {
                ownerRef.set( { owner: authData.user.uid } );
            }
            this.setState({
                uid: authData.user.uid,
                owner: data.owner || authData.user.uid
            })
        });
    }

    render() {

        const logoutBtn = <button onClick={ this.logout.bind( this ) } >Logout</button>

        // s'il existe un proprieteaire
        if ( !this.state.uid ) {
            return <div>{ this.renderLogin() }</div>;
        }

        // s'il existe mais que ce n'est pas le proprietaire
        if( this.state.uid !== this.state.owner ) {
            return (
                <div className="login">
                    { this.renderLogin() }
                    <p>Vous n'etes pas le proprietaire de cette page</p>
                </div>
            );
        }

        const adminCards =
            <div className="cards">
                { Object.keys( this.props.recettes ).map( this.renderAdmin.bind( this ) ) }
                <div className="card hidden-sm-down" />
            </div>;

        return (
            <div className="admin">
                <h1>Administration</h1>
                <AddRecipe
                    addRecipe={ this.props.addRecipe.bind( this ) }
                    updateRecipe={ this.props.updateRecipe.bind( this ) }
                />

                { adminCards }

                <footer>
                    <button onClick={ this.props.loadSamples.bind( this ) }>Load Samples</button>
                    { logoutBtn }
                </footer>
            </div>

        );
    }

    static propTypes = {
        recettes: PropTypes.object.isRequired,
        loadSamples: PropTypes.func.isRequired,
        addRecipe: PropTypes.func.isRequired,
        updateRecipe: PropTypes.func.isRequired,
        deleteRecipe: PropTypes.func.isRequired,
        currentPagePseudo: PropTypes.string.isRequired,
    }

}

export default Admin;