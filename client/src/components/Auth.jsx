import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from '../assets/signup.jpg';

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const handleChange = () => {}

    return (
        <div className='auth__form-container'>
            <div className='auth__form-container_fields'>
                <div className='auth__form-container_fields-content'>
                    <p>{isSignUp ? 'Sign Up' : 'Sign In'}</p>
                    <form onSubmit={() => {}}>
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
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth;