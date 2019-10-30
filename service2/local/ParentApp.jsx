import React from 'react';
import config from './config.json';
import App from '../src/App.jsx';

export default class ParentApp extends React.Component {
  componentDidMount () {
    window.postMessage(
      {
        type: 'INIT_UPDATE',
        payload: config
      },
      document.location.origin
    )
  }

  render () {
    return <App />
  }
}
