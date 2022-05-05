import React from 'react';
import { toast } from 'react-toastify';
import useLaptop from '../../Hooks/useLaptop';

const InventoryItems = ({ laptop }) => {
    const { name, price, quantity, suplier, description, img, _id } = laptop;
    const [laptops, setLaptops] = useLaptop()
    const handleDelete = id => {
        const proceed = window.confirm('Do you really want to delete this item??');
        if (proceed) {
            const url = `https://secret-bastion-79495.herokuapp.com/laptops/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingData = laptops.filter(laptop => laptop._id != id);
                        setLaptops(remainingData);
                    }
                })
        }
    }

    const handleMyItem = (event) => {
        const myItem = {
            name: name,
            price: price,
            quantity: quantity,
            suplier: suplier,
            description: description,
            img: img
        }
        fetch('http://localhost:5000/myItem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myItem)
        })
            .then(res => res.json())
            .then(data => {
                toast("You have susscessfully added this as MY item")
            })

    }
    return (
        <tr>
            <td className='text-start'>{name}</td>
            <td>{suplier}</td>
            <td>{price}</td>
            <td><img style={{ width: "80px", height: "80px" }} src={img} alt="" /></td>
            <td>{quantity}</td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-primary'>Delete this item</button></td>
            <td><button onClick={handleMyItem} className='btn btn-primary'>Add As My Item</button></td>
        </tr>
    );
};

export default InventoryItems;