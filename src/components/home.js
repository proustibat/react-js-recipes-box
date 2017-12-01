import React from 'react';
import PropTypes from 'prop-types';

// components
import { Connexion, Profiles } from './';

class Home extends React.Component {

    state = {};

    render() {
        return (
            <div className="home">
                <Connexion/>
                <Profiles/>
            </div>
        );
    }

    static propTypes = {}

}

export default Home;
