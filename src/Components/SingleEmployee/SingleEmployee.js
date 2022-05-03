
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './SingleEmployee.css'

const SingleEmployee = ({ e }) => {
    const { name, post, img } = e;
    return (
        <div className='mt-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {post}
                    </Card.Text>
                    <Button className="primary">See Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleEmployee;