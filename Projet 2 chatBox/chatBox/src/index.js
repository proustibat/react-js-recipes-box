import React        from 'react';
import { render }   from 'react-dom';

import './index.css';

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

render(
    <Connexion />,
    document.getElementById('root')
);
