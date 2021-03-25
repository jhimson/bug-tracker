/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../assets/images/login-logo.png';

// components
import Layout from '../components/Layout';

// actions
import { register } from '../actions/userActions';

const RegisterPage = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const resetFields = () => {
    setFirstname('');
    setLastname('');
    setEmail('');
    setPassword('');
  };

  const onSubmitRegister = (event) => {
    event.preventDefault();
    dispatch(register(email, firstname, lastname, password));
    resetFields();
  };
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full h-auto p-5 bg-gray-200 rounded-lg md:w-1/4">
          <div>
            <img src={logo} alt="" className="w-full h-72" />
          </div>
          <form
            className="space-y-4"
            onSubmit={(event) => onSubmitRegister(event)}
          >
            <h1 className="text-2xl font-bold text-center">Account Register</h1>
            <div className="flex space-x-5">
              <div>
                <label htmlFor="firstname" className="w-3/6 font-semibold">
                  Firstname:
                </label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="w-3/6 font-semibold">
                  Lastname:
                </label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="font-semibold">
                Email:
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="font-semibold">
                Password:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <button className="w-full py-2 mt-5 text-lg font-bold bg-blue-400 rounded focus:outline-none focus:ring-2 ">
                Sign up
              </button>
            </div>
            <div>
              <p className="mt-5 text-center text-md">
                Already have an account?{' '}
                <Link to="/" className="text-purple-600">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
