import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import google from '../../images/google.png'

const GoogleLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [signInWithgoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorelement;
    if (user) {
        navigate(from);
    }
    if (error) {
        errorelement = <p className='text-danger'>{error?.message}</p>
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>
            {errorelement}
            <button onClick={() => signInWithgoogle()} className='btn btn-info w-50 d-block mx-auto my-3'>
                <img style={{ width: "30px" }} className='mx-3' src={google} alt="" />
                Google Login</button>
        </div>
    );
};

export default GoogleLogin;