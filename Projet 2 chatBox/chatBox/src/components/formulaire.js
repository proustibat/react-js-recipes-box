import React from 'react';

class Formulaire extends React.Component {

    createMessage( event ) {

        event.preventDefault();

        const message = this.message.value;

        this.props.addMessage( message );

        this.messageForm.reset();

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
                    maxLength = "140"
                    ref={ msg => this.message = msg }
                />

                <div className="info">140</div>

                <button type="submit">Envoyer</button>
            </form>
        );

    }

}
export default Formulaire;