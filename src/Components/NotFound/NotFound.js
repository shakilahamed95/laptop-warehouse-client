import React from 'react';
import notfound from '../../images/notfound.jpeg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center mt-5 p-4'>Upppssss !!!  Nothing Found In This Page</h1>
            <img className='not-found-img' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;