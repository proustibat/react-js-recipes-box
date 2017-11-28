import React from 'react';
import { render } from 'react-dom';

// css
import './style/css/bootstrap.min.css';
import './index.css';

class App extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea className="form-control" rows="35" value="Enter your text"></textarea>
                    </div>
                    <div className="col-sm-6">
                        <h1>Resultat</h1>
                    </div>
                </div>
            </div>
        );
    }
}

render(
    <App/>,
    document.getElementById('root')
);

