import React from 'react';
import Brand from '../Brand/Brand';
import Slider from '../Slider/Slider';
import TeamMember from '../TeamMember/TeamMember';


const Home = () => {
    return (
        <div className=''>
            <Slider></Slider>
            <TeamMember></TeamMember>
            <Brand></Brand>
        </div>
    );
};

export default Home;