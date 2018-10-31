import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import App from './App.jsx';

ReactDOM.render(<App />, document.querySelector('#app'));

if (module.hot) {
    module.hot.accept();
}