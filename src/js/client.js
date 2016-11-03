import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import color from 'color';

import Layout from './components/Layout';

//render the whole app
const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
