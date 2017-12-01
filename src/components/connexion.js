import React from 'react';
import PropTypes from 'prop-types';

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
            <div className="connexionBox">
                <form className="connexion" onSubmit={ this.goToApp.bind( this ) }>
                    <h1>Ma Boîte à Recettes</h1>
                    <input type="text"
                           placeholder="Nom du Chef"
                           pattern="[A-Za-z-]{1,}"
                           required
                           ref={ input => { this.boxInput = input } }
                    />
                    <button type="submit">Go</button>
                    <p>Pas de caractères spéciaux.</p>
                </form>
            </div>
        );

    }

    static contextTypes = {
        router: PropTypes.object
    };
}

export default Connexion;
