import React, {useState} from 'react';
import { Card, Button, CardHeader, CardBody, CardText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Axios from 'axios';
import UpdateUser from './UpdateUser';

const UserCard = (props) => {
    console.log(props)

    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

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
                    <UpdateUser />
                </ModalBody>
                <ModalFooter>
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