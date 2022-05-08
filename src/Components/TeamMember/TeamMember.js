import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './TeamMember.css'
import guy1 from '../../images/employee/guy1.jpg'
import SingleEmployee from '../SingleEmployee/SingleEmployee';

const TeamMember = () => {
    const [employee, setEmployee] = useState([])
    useEffect(() => {
        fetch('https://secret-bastion-79495.herokuapp.com/employee')
            .then(res => res.json())
            .then(data => setEmployee(data))
    }, [])
    return (
        <div>
            <h1 className='text-primary text-center intro-text'> Our Team Members</h1>
            <div className='d-flex justify-content-center ceo'>
                <Card style={{ width: '18rem' }} className='employee'>
                    <Card.Img variant="top" src={guy1} />
                    <Card.Body>
                        <Card.Title>Md.Tanveer</Card.Title>
                        <Card.Text>
                            CEO
                        </Card.Text>
                        <Button variant="primary">See Details</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='container employee-container'>
                {
                    employee.map(e => <SingleEmployee
                        key={e._id}
                        e={e}
                    ></SingleEmployee>)
                }
            </div>
        </div>
    );
};

export default TeamMember;