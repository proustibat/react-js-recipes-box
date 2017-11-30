import React from 'react';


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
        details: React.PropTypes.shape({
            image:          React.PropTypes.string.isRequired,
            ingredients:    React.PropTypes.string.isRequired,
            instructions:   React.PropTypes.string.isRequired,
            nom:            React.PropTypes.string.isRequired,
        }),
    }

}


export default Card;