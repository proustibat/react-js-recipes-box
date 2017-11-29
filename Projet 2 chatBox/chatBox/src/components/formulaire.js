import React from 'react';

class Formulaire extends React.Component {

    state = {
      length: this.props.length
    };

    createMessage( event ) {

        event.preventDefault();

        const message = {
            message: this.message.value,
            pseudo: this.props.pseudo
        };

        this.props.addMessage( message );

        this.messageForm.reset();

        this.setState( { length: this.props.length } );

    }

    compteur( event ) {

        const length = this.props.length - this.message.value.length;

        this.setState( { length } );

    }

    render() {

        return (
            <form
                className="form"
                onSubmit={ this.createMessage.bind( this ) }
                ref={ form=>this.messageForm = form }
            >
                <textarea
                    required
                    maxLength={this.props.length}
                    ref={ msg => this.message = msg }
                    onChange={ this.compteur.bind( this ) }
                />

                <div className="info">{ this.state.length }</div>

                <button type="submit">Envoyer</button>
            </form>
        );

    }

}
export default Formulaire;