import React, {useState, useEffect} from 'react';
import { Card, Button, CardHeader, CardBody, CardText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Axios from 'axios';

const UserCard = (props) => {
    const initialUser = {
        name: '',
        bio: ''
    }

    const [user, setUser] = useState(initialUser);

    useEffect(() => {
        const userToEdit = props
        if (userToEdit) {
            setUser(userToEdit)
        }
    }, [])

    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        Axios
        .put(`http://localhost:5000/api/users/${props.id}`, user)
        .then(res => {
            console.log('user updated', res)
            window.location.reload()
        })
        .catch(err => console.log('Unable to update', err))
    }

    const deleteUser = e => {
        e.preventDefault()
        Axios
        .delete(`http://localhost:5000/api/users/${props.id}`)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(err => console.log('Cannot delete user', err))
    }

    return (
        <div className='userCard'>
        <Card>
            <CardHeader tag="h3">{props.name}</CardHeader>
            <CardBody>
            <CardText>Bio: {props.bio}</CardText>
            <Button color='info' className='editBtn' onClick={toggle}>Edit</Button>
            <Modal isOpen={modal} toggle={toggle} className='editModal'>
                <ModalHeader toggle={toggle}>Update User</ModalHeader>
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
                    type='textarea'
                    name='bio'
                    placeholder='Bio'
                    onChange={changeHandler}
                    value={user.bio}
                    />
            </form>
                </ModalBody>
                <ModalFooter>
                    <Button color='info' className='updateBtn' onClick={handleSubmit}>Update User</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <Button color='danger' className='deleteBtn' onClick={deleteUser}>Delete</Button>
            </CardBody>
        </Card>
        </div>
    );
};

export default UserCard;