var React = require('react');
var ReactDOM = require('react-dom');


import App from "./components/App";

import Provider from './provider';


ReactDOM.render(<Provider><App /></Provider>, document.getElementById('app'));
