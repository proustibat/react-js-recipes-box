import React from 'react';
import { render } from 'react-dom';

// css
import './style/css/bootstrap.min.css';
import './index.css';

// js
import { sampleText } from './sampleText';

class App extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea value={sampleText} rows="35" className="form-control" />
                    </div>
                    <div className="col-sm-6">
                        <div>
                            {sampleText}
                        </div>
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

