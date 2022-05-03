import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './LaptopDetails.css'

const LaptopDetails = () => {
    const { id } = useParams()
    const [laptopDetails, setLaptopDetails] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/laptop/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setLaptopDetails(data))

    }, [])
    return (
        <div>
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
                    <button className='btn btn-primary'>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default LaptopDetails;