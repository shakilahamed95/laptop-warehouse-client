import React, { useEffect, useState } from 'react';

const MySingleItem = ({ laptop }) => {
    const { name, price, quantity, suplier, description, img, _id } = laptop;
    const [laptops, setLaptops] = useState([])
    useEffect(() => {
        const url = 'https://secret-bastion-79495.herokuapp.com/myItem'
        fetch(url)
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [laptops])
    const handleDelete = id => {
        const proceed = window.confirm('Do you really want to delete this item??');
        if (proceed) {
            const url = `https://secret-bastion-79495.herokuapp.com/myItem/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        const remainingData = laptops.filter(laptop => laptop._id !== id);
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

export default MySingleItem;