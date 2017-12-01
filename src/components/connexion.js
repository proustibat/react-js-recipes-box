import React from 'react';
import PropTypes from 'prop-types';

// components
import { Profiles } from './index'

class Connexion extends React.Component {

    goToApp( event ) {

        event.preventDefault();

        // recuperer le pseudo
        const pseudo = this.boxInput.value;

        // changer l'url
        let url = `/box/${ pseudo }`;

        this.context.router.transitionTo( url );

    }

    render() {

        return (
            <div className="container connexion">
                <form className="form-signin" role="form" onSubmit={ this.goToApp.bind( this ) }>
                    <h1 className="form-signin-heading">Recipe Box</h1>
                    <input type="text"
                           className="form-control"
                           placeholder="Nom du Chef"
                           pattern="[A-Za-z-]{1,}"
                           required
                           ref={ input => { this.boxInput = input } } />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Go</button>
                    <p className="no-special-chars">Pas de caractères spéciaux.</p>
                </form>
            </div>

        );

    }

    static contextTypes = {
        router: PropTypes.object
    };
}

export default Connexion;
