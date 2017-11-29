import React from 'react';
import Formulaire from './formulaire';
import Message from './messages';

class App extends React.Component {

    render() {
        return (
            <div className="box">
                <div className="messages">
                    <Message pseudo="proustibat" />
                </div>
                <Formulaire />
            </div>
        );
    }
}
export default App;