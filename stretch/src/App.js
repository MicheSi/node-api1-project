import React, {useState, useEffect} from 'react';
import UsersList from './components/UsersList';
import Axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [user, setUser] = useState([]);
    
    useEffect(() => {
        Axios
        .get('http://localhost:5000/api/users')
        .then(res => {
            console.log(res)
            setUser(res.data)
        })
        .catch(err => console.log('Cannot fetch data', err))
    }, [])

  return (
    <div className="App">
      <h1>Stretch Project</h1>
      <h2>List of Users</h2>
      <UsersList />
    </div>
  );
}

export default App;
