import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './LaptopDetails.css'

const LaptopDetails = () => {
    const { id } = useParams()
    const [laptopDetails, setLaptopDetails] = useState({})
    useEffect(() => {
        const url = `https://secret-bastion-79495.herokuapp.com/laptops/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLaptopDetails(data))

    }, [])


    const handleDelivery = event => {
        const { quantity, sold } = laptopDetails;
        let newQuantity = parseInt(quantity) - 1;
        let newSold = parseInt(sold) + 1;
        const updatedValue = { ...laptopDetails, quantity: newQuantity, sold: newSold };
        setLaptopDetails(updatedValue)
        toast("One item have been delivered sucessfully....")

        const url = `https://secret-bastion-79495.herokuapp.com/laptops/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedValue)
        })
            .then(res => res.json())
            .then(data => { })
    }
    const handleReStock = event => {
        event.preventDefault()
        const { quantity } = laptopDetails;
        const restock = parseInt(event.target.stock.value)
        let newQuantity = parseInt(quantity) + restock;
        const updatedQuantity = { ...laptopDetails, quantity: newQuantity };
        setLaptopDetails(updatedQuantity)
        event.target.reset();
        toast(`you have restock ${restock} items...`)

        const url = `https://secret-bastion-79495.herokuapp.com/laptops/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => { })
    }

    return (
        <div className='laptop-detail'>
            <h1 className='mt-5 p-5'>{laptopDetails.name}</h1>
            <div className='d-flex'>
                <div>
                    <img className='image' src={laptopDetails.img} alt="" />
                </div>
                <div>
                    <h5>Product Id :{laptopDetails._id}</h5>
                    <h5>Price Tk :{laptopDetails.price}</h5>
                    <p>{laptopDetails.description}</p>
                    <h5>Avalilable quantity:{laptopDetails.quantity}</h5>
                    <h5>Suplier Name :{laptopDetails.suplier}</h5>
                    <h5>Sold:{laptopDetails.sold}</h5>
                    <button onClick={() => handleDelivery(id)} className='btn btn-primary'>Delivered</button>
                    <br />
                    <h3 className='mt-2 text-primary'>Restock the items</h3>
                    <div>
                        <form onSubmit={handleReStock}>
                            <input className='p-2 ' type="text" name="stock" placeholder='Please enter restock number' required />
                            <br />
                            <input className='btn btn-primary mt-2' type="submit" value="Restock" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LaptopDetails;