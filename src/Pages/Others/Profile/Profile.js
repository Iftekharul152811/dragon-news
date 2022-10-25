import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/Authprovider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);

    const handleUpdateInfo = (event) => {
        event.preventDefault();
        console.log(photoURLRef.current.value);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <h2 className='text-success text-center fw-bold'>Update Your Profile</h2>

            <Form onSubmit={handleUpdateInfo}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" readOnly defaultValue={user?.email} placeholder="Enter email" className="text-muted" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handleNameChange} type="text" name='name' defaultValue={name} placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>Photo URl</Form.Label>
                    <Form.Control ref={photoURLRef} type="text" name='photoURL' defaultValue={user?.photoURL} placeholder="Your PhotoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;