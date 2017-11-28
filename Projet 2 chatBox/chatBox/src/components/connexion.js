import React from 'react';

class Connexion extends React.Component {

    render() {
        return (
            <div className="connexionBox">
                <form className="connexion">
                    <input type="text" placeholder="Pseudo" required />
                    <button type="submit">Go</button>
                </form>
            </div>
        );
    }
}
export default Connexion;