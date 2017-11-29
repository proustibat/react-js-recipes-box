import React from 'react';

class Message extends React.Component {

    render() {
        if( this.props.isUser( this.props.details.pseudo ) ) {
            return (
                <p className="user-message">Moi: <br/> { this.props.details.message }</p>
            );
        }
        else {
            return (
                <p className="not-user-message">{ this.props.details.pseudo }: <br/> { this.props.details.message }</p>
            );
        }
    }

    static propTypes = {
        details: React.PropTypes.shape({
            pseudo: React.PropTypes.string.isRequired,
            message: React.PropTypes.string.isRequired
        })
    }

}
export default Message;