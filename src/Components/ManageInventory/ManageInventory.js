import React from 'react';
import { Table } from 'react-bootstrap';
import useLaptop from '../../Hooks/useLaptop';
import InventoryItems from '../InventoryItems/InventoryItems';


const ManageInventory = () => {
    const [laptops, setLaptops] = useLaptop()
    return (
        <div className='mt-5 w-100'>
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
                                <InventoryItems
                                    key={laptop._id}
                                    laptop={laptop}
                                ></InventoryItems>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventory;
