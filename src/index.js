import React        from 'react';
import { render }   from 'react-dom';

// components
import { App, NotFound, Home } from './components';

// router
import { BrowserRouter, Match, Miss } from 'react-router';

// css
import './index.css';


const Root = () => {

    return (
        <BrowserRouter /*basename={process.env.PUBLIC_URL}*/ >
            <div>
                <Match exactly pattern="/" component={ Home } />
                {/*<Match exactly pattern="/" component={ Connexion } />*/}
                {/*<Match exactly pattern="/profiles" component={ Profiles } />*/}
                <Match pattern="/box/:pseudo" component={ App } />
                <Miss component={ NotFound } />
            </div>
        </BrowserRouter>
    );
};

render(
    <Root />,
    document.getElementById( 'root' )
);