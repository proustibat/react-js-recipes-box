import React from 'react';

class Message extends React.Component {

    render() {
        return (
            <p className="user-message">{this.props.pseudo}: Hello you!</p>
        );
    }

}
export default Message;