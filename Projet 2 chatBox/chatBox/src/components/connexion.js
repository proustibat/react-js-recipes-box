import React from 'react';


class Connexion extends React.Component {

    goToChat( event ) {
        // recuperer le pseudo
        console.log(this.pseudoInput.value);
        event.preventDefault();
    };

    render() {
        return (
            <div className="connexionBox" onSubmit={ this.goToChat.bind(this) }>
                <form className="connexion">
                    <input type="text"
                        placeholder="Pseudo"
                        required
                        ref={ input => { this.pseudoInput = input } }
                    />
                    <button type="submit">Go</button>
                </form>
            </div>
        );
    }
}
export default Connexion;