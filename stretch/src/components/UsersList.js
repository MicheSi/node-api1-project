import React, {useState, useEffect} from 'react';
import UserCard from './UserCard';
import axios from 'axios';

const UsersList = props => {
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        axios
        .get('http://localhost:5000/api/users')
        .then(res => {
            console.log(res)
            setUser(res.data)
        })
        .catch(err => console.log('Cannot fetch data', err))
    }, [])

    return (
        <div className='usersList'>
            {user.map(user => (
                <UserCard
                 key={user.id}
                 name={user.name}
                 bio={user.bio}
                />
            ))}
            
        </div>
        
    )
}

export default UsersList;