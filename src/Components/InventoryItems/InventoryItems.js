import React from 'react';
import useLaptop from '../../Hooks/useLaptop';

const InventoryItems = ({ laptop }) => {
    const { name, price, quantity, suplier, description, img, _id } = laptop;
    const [laptops, setLaptops] = useLaptop()
    const handleDelete = id => {
        const proceed = window.confirm('Do you really want to delete this item??');
        if (proceed) {
            console.log('deleting user with id, ', id);
            const url = `http://localhost:5000/laptops/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remainingData = laptops.filter(laptop => laptop._id != id);
                        setLaptops(remainingData);
                    }
                })
        }
    }
    return (
        <tr>
            <td className='text-start'>{name}</td>
            <td>{suplier}</td>
            <td>{price}</td>
            <td><img style={{ width: "80px", height: "80px" }} src={img} alt="" /></td>
            <td>{quantity}</td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-primary'>Delete this item</button></td>
        </tr>
    );
};

export default InventoryItems;