import React from 'react';
import PropTypes from 'prop-types';

// firebase
import firebase from '../database';

class Profiles extends React.Component {

    state = {
        users: []
    };

    componentWillMount(){
        this.usersRef = firebase.database().ref();
        this.usersRef.on('value', snapshot => {

            const users = Object.keys( snapshot.val() || {} ).map( username => {
                const nbRecipes =
                    Object.keys(
                        snapshot.child( `${ username }` ).val().recettes || {}
                    )
                    .length || 0;
                return {
                    username,
                    nbRecipes
                }
            });

            console.log(users);


            this.setState( { users } );
        });
    }

    goToProfile( user ) {
        this.context.router.transitionTo( `/box/${ user }` );
    }

    render() {
        const usersList = this.state.users.map( user =>
            <div key={ user.username } className="col-lg-3 col-sm-6">
                <div className="card hovercard" onClick={ this.goToProfile.bind( this, user.username ) } >
                    <div className="cardheader" />
                    <div className="avatar"><img alt="" src={`https://fakeimg.pl/100/?text=pic-${ user.nbRecipes }`} /></div>
                    <div className="info">
                        <div className="title">{ user.username }</div>
                        <div>{ user.nbRecipes } { user.nbRecipes > 1 ? 'recettes' : 'recette' }</div>
                    </div>

                </div>
            </div>
        );

        return (
            <div className="container profiles">
                <h1>Les chefs</h1>
                <div className="row">
                    { usersList }
                </div>
            </div>
        );
    }

    componentWillUnMount() {
        firebase.removeBinding( this.usersRef );
    }

    static contextTypes = {
        router: PropTypes.object
    };
}

export default Profiles;
