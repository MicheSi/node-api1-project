import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const initialUser = {
    name: '',
    bio: ''
}

const UpdateUser = props => {
    const [user, setUser] = useState(initialUser);

    const changeHandler = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className='updateForm'>
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
                <button className='updateBtn'>Update User</button>
            </form>
        </div>
    )
}

export default UpdateUser;