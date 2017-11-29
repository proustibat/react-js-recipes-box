import React from 'react';
import Formulaire from './formulaire';
import Message from './messages';

class App extends React.Component {

    render() {
        return (
            <div className="box">
                <div className="messages">
                    <Message pseudo={this.props.params.pseudo} />
                </div>
                <Formulaire />
            </div>
        );
    }
}
export default App;