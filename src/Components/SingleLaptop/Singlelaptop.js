import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Singlelaptop.css'

const Singlelaptop = ({ laptop }) => {
    const { name, price, quantity, suplier, description, img, _id } = laptop;
    const nevigate = useNavigate()
    const nevigateToLaptopDetails = _id => {
        nevigate(`/inventory/${_id}`)
    }
    return (
        <div>
            <Card style={{ width: '25rem' }} className='single-item'>
                <Card.Img style={{ width: "350px", height: "350px" }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 250)} ....
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> Price Tk: {price}</ListGroupItem>
                    <ListGroupItem>Available Quantity: {quantity}</ListGroupItem>
                    <ListGroupItem>Suplier : {suplier}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <button onClick={() => nevigateToLaptopDetails(_id)} className='btn btn-primary'>Manage your Stock</button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Singlelaptop;