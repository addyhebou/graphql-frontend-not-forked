import React from 'react';
// import ReactDOM from 'react-dom';
// import ApolloClient from 'apollo-boost';
import { ApolloClient, ApolloProvider,InMemoryCache} from '@apollo/client';
// import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';
import { createRoot } from 'react-dom/client';
// const client = new ApolloClient({
//   uri: 'http://localhost:4000',
// });

// this can be local or a remote endpoint
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/graphql',

});

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>,
//   document.getElementById('root')
// );
createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
// createRoot( <ApolloProvider client={client}>
//   <App />
// </ApolloProvider>,document.getElementById('root')).render(<App />);