import React from 'react';
import UsersList from './components/UsersList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Stretch Project</h1>
      <h2>List of Users</h2>
      <UsersList />
    </div>
  );
}

export default App;
