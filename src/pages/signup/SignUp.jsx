
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// style
import './style.scss';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);


  const validate = () => {
    const errors = {};



    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      return false;
    }
  };



  return (
    <div className='flex justify-center items-center h-screen bg-indigo-400'>
      <div className="w-96 p-6 shadow-lg bg-slate-50 rounded-md">
        <h1 className='text-3xl block text-center font-bold'>Sign Up</h1>
        <hr className='mt-3'/>
        <form onSubmit={handleSubmit}>
          <div className='mt-3'>
            <label htmlFor="username" className='block text-base mb-2'>Username</label>
            <input
              type="text"
              id="username"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder='Enter Username...'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
          </div>
          <div className='mt-3'>
            <label htmlFor="email" className='block text-base mb-2'>Email</label>
            <input
              type="email"
              id="email"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder='Enter Email...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className='mt-3'>
            <label htmlFor="password" className='block text-base mb-2'>Password</label>
            <input
              type="password"
              id="password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder='Enter Password...'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div className='mt-5'>
            <button type="submit" className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold'>Sign Up</button>
          </div>
        </form>
        {registrationSuccess && ( 
          <div className='mt-3 text-green-600 text-center'>
            <p>Registration successful! You can now <Link to="/login" className='text-indigo-800 font-semibold'>log in</Link>.</p>
          </div>
        )}
        <div className='mt-3 text-center'>
          <p className='text-base'>Already have an account? <Link to="/login" className='text-indigo-800 font-semibold'>Log in here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
