/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/images/login-logo.png';

// ? COMPONENTS
import Layout from '../components/Layout';
import FlashMessage from '../components/FlashMessage';

// ? ----------------------

// ? ACTIONS
import { userLogin } from '../actions/userActions';
// ? ----------------------

// ? VALIDATION SCHEMAS
const schema = yup.object().shape({
  email: yup.string().email().required('Email is required*'),
  password: yup.string().required('Password is required*'),
});
// ? ----------------------

const LoginPage = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  // ? GLOBAL STATE (Store)
  const error = useSelector((state) => state.userLogin.error);

  // ? FUNCTIONS
  const onSubmit = (data) => {
    console.log(data);
    dispatch(userLogin(data));
  };
  // ? ----------------------

  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full h-auto p-5 bg-gray-200 rounded-lg md:w-3/4 lg:w-1/2 xl:w-1/4">
          {error ? <FlashMessage type="danger" message={error} /> : null}
          <div>
            <img src={logo} alt="" className="w-full h-72" />
          </div>
          <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl font-bold text-center">Account Login</h1>
            <div>
              <label htmlFor="username" className="font-semibold">
                Email:
              </label>
              <input
                ref={register}
                type="text"
                name="email"
                className="block w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              />
              <span className="font-semibold text-red-700">
                {errors.email && errors.email.message}
              </span>
            </div>
            <div>
              <label htmlFor="password" className="font-semibold">
                Password:
              </label>
              <input
                ref={register}
                type="password"
                name="password"
                className="block w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              />
              <span className="font-semibold text-red-700">
                {errors.password && errors.password.message}
              </span>
            </div>
            <div>
              <button className="w-full py-2 mt-5 text-lg font-bold bg-blue-400 rounded focus:outline-none focus:ring-2 ">
                Login
              </button>
            </div>
            <div>
              <p className="mt-5 font-semibold text-center text-md">
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
