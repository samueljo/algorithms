import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Root } from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root compiler="TypeScript" framwork="React" />,
    document.getElementById('main'));
});
