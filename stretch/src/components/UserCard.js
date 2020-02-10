import React from 'react';
import { Card, Button, CardHeader, CardBody, CardText } from 'reactstrap';

const UserCard = (props) => {
  return (
    <div className='userCard'>
      <Card>
        <CardHeader tag="h3">{props.name}</CardHeader>
        <CardBody>
          <CardText>Bio: {props.bio}</CardText>
          <Button color='info' className='editBtn'>Edit</Button>
          <Button color='danger' className='deleteBtn'>Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;