import React from 'react';
import Formulaire from './formulaire';
import Message from './messages';

class App extends React.Component {

    state = {
        messages: {}
    };

    addMessage( message ) {

        console.log('addMessage : ', message);

        // copier le state
        const messages = { ...this.state.messages };

        // ajoute le timestamp
        const timestamp = Date.now();

        // creation du message unique
        messages[ `message-${ timestamp }` ] = message;

        // met a jour le state
        this.setState( {  messages } );

    }

    render() {
        return (
            <div className="box">
                <div className="messages">
                    <Message pseudo={ this.props.params.pseudo } />
                </div>
                <Formulaire addMessage={ this.addMessage.bind( this ) } />
            </div>
        );
    }
}
export default App;