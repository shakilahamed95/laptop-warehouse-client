import React from 'react';
import { Link } from 'react-router-dom';
import useLaptop from '../../Hooks/useLaptop';
import Brand from '../Brand/Brand';
import Loading from '../Loading/Loading';
import Singlelaptop from '../SingleLaptop/Singlelaptop';
import Slider from '../Slider/Slider';
import TeamMember from '../TeamMember/TeamMember';
import './Home.css'


const Home = () => {
    const [laptops, setLaptops] = useLaptop()
    if (laptops.length > 6) {
        setLaptops(laptops.slice(0, 6))
    }
    return (
        <div className='container'>
            <Slider></Slider>
            <TeamMember></TeamMember>
            <Brand></Brand>
            <div>
                <h1 className='text-primary mt-3 mb-3'>Our inventory items </h1>
                <div className='inventory-container'>


                    {
                        (!laptops) ? <Loading></Loading> : (laptops.map(laptop => <Singlelaptop
                            key={laptop._id}
                            laptop={laptop}
                        ></Singlelaptop>))
                    }

                </div>
                <Link to='/inventory'><button className='btn btn-primary mt-5'> Manage Inventory</button></Link>
            </div>
        </div>
    );
};

export default Home;