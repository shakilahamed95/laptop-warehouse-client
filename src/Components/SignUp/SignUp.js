import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const nevigate = useNavigate()
    const nevigateLogin = event => {
        nevigate('/login')
    }
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
    });

    const handleEmailChange = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, emailError: "" });
        } else {
            setErrors({ ...errors, emailError: "Invalid Email Address" });
            setUserInfo({ ...userInfo, email: "" });
        }
    };
    const handlePasswordChange = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, passwordError: "" });
        } else {
            setErrors({ ...errors, passwordError: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleConfirmPasswordChange = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, passwordError: "" });
        } else {
            setErrors({ ...errors, passwordError: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };
    const [createUserWithEmailAndPassword, user] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);


    const handleFormSubmit = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        toast("A Email has sent to your account please verify it")
    }
    return (
        <div className='mx-auto container w-50 mt-5 p-4'>
            <h1 className='text-center text-primary mt-5'>Please Sign Up </h1>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasiName">
                    <Form.Control type="text" name="name" id="" placeholder='Please enter your name' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={handleEmailChange} type="email" name="email" id="" placeholder='Please enter your email' required />
                    <p className='text-danger'>  {errors?.emailError}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Control onChange={handlePasswordChange} type="password" name='password' id='' placeholder="Password" required />
                    <p className='text-danger'> {errors?.passwordError}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={handleConfirmPasswordChange} type="password" name='confirm-password' id='' placeholder=" Confirm Password" required />
                </Form.Group>
                <Button
                    variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p>Already Have An Account? <span style={{ cursor: "pointer" }} className='text-primary' onClick={nevigateLogin}>Please Login</span></p>
        </div>
    );
};

export default SignUp;