import React from 'react';
import Formulaire from './formulaire';
import Message from './messages';
import database from '../database';

class App extends React.Component {

    state = {
        messages: {}
    };

    componentWillMount() {
        this.ref = database.syncState( '/', {
            context: this,
            state: 'messages'
        });


    }

    addMessage( message ) {

        // copier le state
        const messages = { ...this.state.messages };

        // ajoute le timestamp
        const timestamp = Date.now();

        // creation du message unique
        messages[ `message-${ timestamp }` ] = message;

        Object.keys( messages )
            // selectionne les messages de la fin du tableau à la fin du tableau - le nombre maximum de messages
            .slice( 0, -( parseInt( this.props.maxMessages, 10 ) ) )
            // pour chaque message a supprimer, attribue une value null
            .map( key => messages[ key ] = null );

        // met a jour le state
        this.setState( {  messages } );

    }

    render() {
        const messages = Object
            .keys( this.state.messages )
            .map( key =>
                <Message
                    key={ key }
                    details={ this.state.messages[ key ] } />
            );

        return (
            <div className="box">
                <div className="messages">
                    { messages }
                </div>
                <Formulaire
                    addMessage={ this.addMessage.bind( this ) }
                    pseudo={ this.props.params.pseudo }
                    length="140"
                />
            </div>
        );
    }
}
export default App;