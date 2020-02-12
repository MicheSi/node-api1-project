import React, {useState, useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Axios from 'axios';
import UsersList from './components/UsersList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const initialUser = {
    name: '',
    bio: ''
  }

  const [user, setUser] = useState(initialUser);
  
    // useEffect(() => {
    //     Axios
    //     .get('http://localhost:5000/api/users')
    //     .then(res => {
    //         console.log(res)
    //         setUser(res.data)
    //     })
    //     .catch(err => console.log('Cannot fetch data', err))
    // }, [])

    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    const changeHandler = e => {
      console.log(e.target.name, e.target.value)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log('new user', user)
    }

    const handleSubmit = e => {
        e.preventDefault()
        Axios
        .post(`http://localhost:5000/api/users`, user)
        .then(res => {
            console.log('added user', res.data)
            setUser(res.data)
            window.location.reload()
        })
        .catch(err => console.log('Unable to update', err))
    }

  return (
    <div className="App">
      <h1>Stretch Project</h1>
      <h2>List of Users</h2>
      <div className='addModal'>
        <Button color='info' className='editBtn' onClick={toggle}>Add User</Button>
          <Modal isOpen={modal} toggle={toggle} className='addModal'>
              <ModalHeader toggle={toggle}>Add New User</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit}>
                  <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  onChange={changeHandler}
                  value={user.name}
                  />
                  <textarea
                  type='text'
                  name='bio'
                  placeholder='Bio'
                  onChange={changeHandler}
                  value={user.bio}
                  />
                  <Button type='submit' color='info' className='updateBtn' >Add User</Button>
                </form>
              </ModalBody>
              <ModalFooter>
                  <Button type='submit' color='info' className='updateBtn' >Add User</Button>
                  <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
          </Modal>
      </div>
      <UsersList />
    </div>
  );
}

export default App;
