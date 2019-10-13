import React from 'react'
import ReactDOM from 'react-dom'
// import { ApolloProvider } from 'react-apollo'
import { ApolloProvider } from 'react-apollo-hooks';


import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/main.scss'

import apollo from './core/apollo'

import App from './components/App'


ReactDOM.render(
  <ApolloProvider client={apollo}>
    <App/>
  </ApolloProvider>,

  document.getElementById('root')
)
