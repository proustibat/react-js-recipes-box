import React from 'react';
import { render } from 'react-dom';

// css
import './style/css/bootstrap.min.css';
import './index.css';

// js
import { sampleText } from './sampleText';
import marked from 'marked';

class App extends React.Component {

    state = {
        text: sampleText
    };

    componentWillMount () {
        const localStorageText = localStorage.getItem('text');
        if(typeof localStorageText !== 'undefined') {
            this.setState({ text: localStorageText });
        }
    }

    componentWillUpdate (nextProps, nextState) {
        localStorage.setItem('text', nextState.text);
    }

    editText (event) {
        this.setState({
            text: event.target.value
        });
    }

    renderText () {
        return {
            __html: marked(this.state.text, { sanitize: true })
        };
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea
                            value={this.state.text}
                            rows="35"
                            className="form-control"
                            onChange={this.editText.bind(this)}
                        />
                    </div>
                    <div className="col-sm-6">
                        <div dangerouslySetInnerHTML={this.renderText()}/>
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

