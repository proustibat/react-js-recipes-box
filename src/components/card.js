import React from 'react';
import PropTypes from 'prop-types';


class Card extends React.Component {

    render() {

        const ingredients = this.props.details.ingredients
            .split( ',' )
            .map( ( item, id ) => <li key={ id }>{ item }</li> );

        const instructions = this.props.details.instructions
            .split( '\n' )
            .map( ( item, id ) => <li key={ id }>{ item }</li> );

        return (
            <div className="card">
                <div className="image"><img src={ this.props.details.image } alt={ this.props.details.nom } /></div>
                <div className="recette">
                    <h2>{ this.props.details.nom }</h2>
                    <ul className="liste-ingredients">{ ingredients }</ul>
                    <ol className="liste-instructions">{ instructions }</ol>
                </div>
            </div>
        );
    }

    static propTypes = {
        details: PropTypes.shape({
            image:          PropTypes.string.isRequired,
            ingredients:    PropTypes.string.isRequired,
            instructions:   PropTypes.string.isRequired,
            nom:            PropTypes.string.isRequired,
        }),
    }

}


export default Card;