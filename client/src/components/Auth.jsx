import React, { useState } from 'react';
import { createRoot } from 'react-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from '../assets/signup.jpg';

const cookies = new Cookies();

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: ''
}

const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isSignUp, setIsSignUp] = useState(true);

    const handleChange = async (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { fullName, username, password, phoneNumber, avatarURL } = form;

        const URL = 'http://localhost:5000/auth';

        const { data: { token, userId, hashedPassword } } = await axios.post(`${URL}/${isSignUp ? 'signup' : 'login' }`, {
            username, password, fullName, phoneNumber, avatarURL
        });

        cookies.set('token', token);
        cookies.set('username', username);
        cookies.set('fullName', fullName);
        cookies.set('userId', userId);

        if (isSignUp) {
            cookies.set('phoneNumber', phoneNumber);
            cookies.set('avatarURL', avatarURL);
            cookies.set('hashedPassword', hashedPassword);
        }

        window.location.reload();
    }

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    }

    return (
        <div className='auth__form-container'>
            <div className='auth__form-container_fields'>
                <div className='auth__form-container_fields-content'>
                    <p>{isSignUp ? 'Sign Up' : 'Sign In'}</p>
                    <form onSubmit={handleSubmit}>
                        {isSignUp && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='fullName'>Full Name</label>
                                <input 
                                    name='fullName'
                                    type='text'
                                    placeholder='Full Name'
                                    onClick={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='username'>Username</label>
                            <input 
                                name='username'
                                type='text'
                                placeholder='Username'
                                onClick={handleChange}
                                required
                            />
                        </div>
                        {isSignUp && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='phoneNumber'>Phone Number</label>
                                <input 
                                    name='phoneNumber'
                                    type='text'
                                    placeholder='Phone Number'
                                    onClick={handleChange}
                                    required
                                />
                            </div>
                        )}
                        {isSignUp && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='avatarURL'>Avatar URL</label>
                                <input 
                                    name='avatarURL'
                                    type='text'
                                    placeholder='Avatar URL'
                                    onClick={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='password'>Password</label>
                            <input 
                                name='password'
                                type='password'
                                placeholder='Password'
                                onClick={handleChange}
                                required
                            />
                        </div>
                        {isSignUp && (
                            <div className='auth__form-container_fields-content_input'>
                                <label htmlFor='confirmPassword'>Confirm Password</label>
                                <input 
                                    name='confirmPassword'
                                    type='password'
                                    placeholder='Confirm Password'
                                    onClick={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className='auth__form-container_fields-content_button'>
                            <button>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                        </div>
                    </form>
                    <div className='auth__form-container_fields-account'>
                        <p>
                            {isSignUp ? 'Already have an account ?' : 'Don\'t have an account ?'}
                            <span onClick={switchMode}>
                                {isSignUp ? ' Sign In' : ' Sign Up'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='auth__form-container_image'>
                <img src={signinImage} alt='sign in' />
            </div>
        </div>
    )
}

export default Auth;