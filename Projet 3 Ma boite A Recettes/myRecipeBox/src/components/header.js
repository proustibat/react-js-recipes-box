import React from 'react';

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
        pseudo: React.PropTypes.string.isRequired
    }

}

export default Header;

