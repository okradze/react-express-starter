import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

serviceWorker.unregister();
