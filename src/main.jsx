import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App.jsx';
import './index.css';

//Apollo client
const client = new ApolloClient({
  uri: "https://api-ca-central-1.hygraph.com/v2/clm6onuju41u601uk2kcm68uf/master",
  cache : new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  
)
