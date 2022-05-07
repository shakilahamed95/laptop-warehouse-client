import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MySingleItem from '../MySingleItem/MySingleItem';

const MyItem = () => {
    const [user] = useAuthState(auth)
    const [laptops, setLaptops] = useState([]);
    useEffect(() => {
        const email = user.email;
        fetch(`https://secret-bastion-79495.herokuapp.com/myItem?email=${email}`)
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [laptops, user])
    return (
        <div className='mt-5 w-100'>
            <h1 className='text-primary'>You Have {laptops.length} Item As Your Item</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Suplier Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Delete Items</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        laptops.map(laptop => {

                            return (
                                <MySingleItem
                                    key={laptop._id}
                                    laptop={laptop}
                                ></MySingleItem>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyItem;