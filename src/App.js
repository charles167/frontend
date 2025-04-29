import React from 'react';
import { ApolloProvider, InMemoryCache } from '@apollo/client';
import CreateDepartment from './components/CreateDepartment';
import DepartmentList from './components/DepartmentList';

const client = new ApolloClient({
  uri: 'https://your-backend-url.onrender.com/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Department Management</h1>
        <CreateDepartment />
        <DepartmentList />
      </div>
    </ApolloProvider>
  );
}

export default App;