/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

// components
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

import logo from '../assets/images/login-logo.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const resetFields = () => {
    setUsername('');
    setPassword('');
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();
    // console.log(username, password);
    resetFields();
  };
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full h-auto p-5 bg-gray-200 rounded-lg md:w-3/4 lg:w-1/2">
          <div>
            <img src={logo} alt="" className="w-full h-72" />
          </div>
          <form
            className="space-y-2"
            onSubmit={(event) => onSubmitLogin(event)}
          >
            <h1 className="text-2xl font-bold text-center">Account Login</h1>
            <div>
              <label htmlFor="username" className="font-semibold">
                Username:
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                Login
              </button>
            </div>
            <div>
              <p className="mt-5 text-center text-md">
                Don't have an account?{' '}
                <Link to="/register" className="text-purple-600">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default LoginPage;
