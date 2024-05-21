import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// style
import './style.scss';
import { useGetLoginMutation } from '../../service/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const [trigger,{data,isLoading}] =useGetLoginMutation()
 
  const validate = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = 'Username is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      trigger({username: "username"})
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-indigo-400'>
      <div className="w-96 p-6 shadow-lg bg-slate-50 rounded-md">
        <h1 className='text-3xl block text-center font-bold'>Login</h1>
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
          {/* {error && <p className="text-red-500 text-sm mt-3">{error}</p>} */}
          <div className='mt-5'>
            <button type="submit" className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold' disabled={isLoading}>{isLoading ? 'Logging in...' : 'Login'}</button>
          </div>
        </form>
        <div className='mt-3 text-center'>
          <p className='text-base'>Haven't logged in? <Link to="/signup" className='text-indigo-800 font-semibold'>Sign up first</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
