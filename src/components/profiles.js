import React from 'react';
import PropTypes from 'prop-types';

// firebase
import firebase from '../database';

class Profiles extends React.Component {

    state = {
        users: []
    };

    componentWillMount(){
        this.fbRef = firebase.database().ref();
        this.fbRef.on('value', snapshot => {
            const users = Object.keys(snapshot.val() || {});
            this.setState( { users } );
        });
    }

    goToProfile( user ) {
        this.context.router.transitionTo( `/box/${ user }` );
    }

    render() {
        const usersList = this.state.users.map( user =>
            <div key={ user } className="card">
                <div className="card-body">
                    <h4 className="card-title">{ user }</h4>
                    {/*<p className="card-text">Mini presentation</p>*/}
                    <button className="btn" onClick={ this.goToProfile.bind( this, user ) }>Voir le profil</button>
                </div>
            </div>
        );

        return (
            <div className="profilesBox">
                <h1>Les chefs</h1>
                <div className="profiles cards">
                    { usersList }
                    <div className="card" />
                    <div className="card" />
                    <div className="card" />
                </div>
            </div>
        );
    }

    componentWillUnMount() {
        firebase.removeBinding( this.fbRef );
    }

    static contextTypes = {
        router: PropTypes.object
    };
}

export default Profiles;
