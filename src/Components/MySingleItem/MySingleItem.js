import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MySingleItem = ({ laptop }) => {
    const { name, price, quantity, suplier, description, img, _id } = laptop;
    const [myitems, setMyitems] = useState([])
    useEffect(() => {
        const url = 'https://laptop-warehouse-server-zhm5.onrender.com/myItem'
        fetch(url, {})
            .then(res => res.json())
            .then(data => setMyitems(data))

    }, [myitems])
    const handleDelete = id => {
        const proceed = window.confirm('Do you really want to delete this item??');
        if (proceed) {
            const url = `https://laptop-warehouse-server-zhm5.onrender.com/myItem/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingData = myitems.filter(item => item._id != id);
                        setMyitems(remainingData);
                        toast("you have successfully deleted the item")
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