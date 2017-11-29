import React        from 'react';
import { render }   from 'react-dom';

// components
import App from './components/app';
import Connexion from './components/connexion';
import NotFound from './components/not-found';

// router
import { BrowserRouter, Match, Miss } from 'react-router';

// css
import './index.css';


const Root = () => {

    const MyApp = props => {
        return (
            <App
                { ...props }
            />
        );
    };

    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={ Connexion } />
                <Match pattern="/pseudo/:pseudo" render={ MyApp } />
                <Miss component={ NotFound } />
            </div>
        </BrowserRouter>
    );
};

render(
    <Root />,
    document.getElementById('root')
);
