import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth)
    const handleAddLaptp = event => {
        event.preventDefault();
        const email = user?.email
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const suplier = event.target.suplier.value;
        const description = event.target.description.value;
        const img = event.target.img.value;
        const newlaptop = { name, email, price, quantity, suplier, description, img }
        fetch('https://laptop-warehouse-server-zhm5.onrender.com/myItem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newlaptop)
        })
            .then(res => res.json())
            .then(data => {
                toast("You have enter a laptop successfullay in database")
                event.target.reset();
            })
    }

    return (
        <div className='mx-auto container w-50 mt-5'>
            <h1 className='text-center text-primary mt-5 p-3'>Insert A New Laptop</h1>
            <Form onSubmit={handleAddLaptp}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name='name' placeholder="Enter Laptop Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name='price' placeholder="Enter Laptop Price" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name='quantity' placeholder="Enter Laptop Quantity" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name='suplier' placeholder="Enter Laptop Suplier Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name='description' placeholder="Enter Laptop Description" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name='img' placeholder="Enter Laptop Image Link" required />
                </Form.Group>
                <input className='btn btn-primary' type="submit" value="Add Laptop" />
            </Form>
        </div>
    );
};

export default AddItem;