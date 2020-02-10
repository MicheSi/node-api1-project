import React from 'react';
import { Card, Button, CardHeader, CardBody, CardText } from 'reactstrap';
import Axios from 'axios';

const UserCard = (props) => {
    console.log(props)

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
            <Button color='info' className='editBtn'>Edit</Button>
            <Button color='danger' className='deleteBtn' onClick={deleteUser}>Delete</Button>
            </CardBody>
        </Card>
        </div>
    );
};

export default UserCard;