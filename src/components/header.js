import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {

    prefixPseudo( pseudo ) {
        return /[aeiou]/i.test( pseudo[ 0 ] ) ? `d'${ pseudo }` : `de ${ pseudo }`;
    }

    render() {
        return (
            <header>
                <h1>La boite à recette { this.prefixPseudo( this.props.pseudo ) }</h1>
            </header>
        );
    }

    static propTypes = {
        pseudo: PropTypes.string.isRequired
    }

}

export default Header;

