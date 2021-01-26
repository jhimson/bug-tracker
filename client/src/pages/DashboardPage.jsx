/* eslint-disable react/button-has-type */
import React from 'react';

import { AiOutlineFileAdd } from 'react-icons/ai';
import { FcDocument } from 'react-icons/fc';
import { IoIosArrowUp, IoMdArrowUp } from 'react-icons/io';

import Layout from '../components/Layout';

const DashboardPage = () => (
  <Layout>
    <div className="h-screen bg-gray-100">
      <div className="flex items-start justify-center p-10 space-x-5">
        <div className="flex flex-col w-screen space-y-2">
          <div className="p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <IoIosArrowUp
                  size="2em"
                  className="mb-2 cursor-pointer hover:text-green-500"
                />
                <h1 className="mb-2 text-lg font-bold">Projects</h1>
              </div>
              <AiOutlineFileAdd size="2em" className="cursor-pointer" />
            </div>
            <div className="p-3 mb-4 bg-white rounded shadow-lg cursor-pointer hover:bg-blue-400 hover:text-white hover:font-bold">
              <div className="flex space-x-2">
                <div className="p-1 bg-white rounded-full">
                  <FcDocument size="3em" />
                </div>
                <div>
                  <h1 className="font-bold text-md">
                    E-Commerce Web application
                  </h1>
                  <p className="text-gray-800 hover:font-bold">TSYS</p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-white rounded shadow-lg cursor-pointer hover:bg-blue-400 hover:text-white hover:font-bold">
              <div className="flex space-x-2">
                <div className="p-1 bg-white rounded-full">
                  <FcDocument size="3em" />
                </div>
                <div>
                  <h1 className="font-bold text-md">
                    Employee Management System
                  </h1>
                  <p className="text-gray-800 hover:font-bold">ESYS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <IoIosArrowUp
                  size="2em"
                  className="mb-2 cursor-pointer hover:text-green-500"
                />
                <h1 className="mb-2 text-lg font-bold">My Issues</h1>
              </div>
            </div>
            <div className="bg-white rounded shadow-lg ">
              <div className="flex flex-col">
                <div className="w-full p-3 bg-gray-200 border-b border-gray-300 filters">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                      <h5 className="font-semibold text-md">Filters:</h5>
                      <button className="p-1 px-3 text-sm text-white bg-blue-400 rounded-full">
                        Assigned to me (1)
                      </button>
                      <button className="p-1 px-3 text-sm text-white bg-blue-400 rounded-full">
                        Created by me (1)
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <h5 className="font-semibold text-md">Due date:</h5>
                      <button className="p-1 px-3 text-sm text-white bg-blue-400 rounded-full">
                        All
                      </button>
                      <button className="p-1 px-3 text-sm text-white bg-blue-400 rounded-full">
                        4 Days (0)
                      </button>
                      <button className="p-1 px-3 text-sm text-white bg-blue-400 rounded-full">
                        Due Today (0)
                      </button>
                      <button className="p-1 px-3 text-sm text-white bg-blue-400 rounded-full">
                        Over Due (5)
                      </button>
                    </div>
                  </div>
                </div>
                <div className="table w-full p-3 issues">
                  <table className="w-full text-center border">
                    <tr>
                      <th>Key</th>
                      <th>Subject</th>
                      <th>Priority</th>
                      <th>Status</th>
                      <th>Due</th>
                    </tr>
                    <tr>
                      <td className="text-blue-800">TSYS-2</td>
                      <td>Login page bug</td>
                      <td>
                        <IoMdArrowUp size="1em" color="red" />
                      </td>
                      <td>
                        <button className="p-1 px-3 text-sm text-white bg-red-400 rounded-full">
                          Open
                        </button>
                      </td>
                      <td>Jan.29</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen p-5">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              <IoIosArrowUp
                size="2em"
                className="mb-2 cursor-pointer hover:text-green-500"
              />
              <h1 className="mb-2 text-lg font-bold">Recent updates</h1>
            </div>
          </div>
          <div className="p-2 bg-white rounded shadow-lg">
            <h1 className="text-2xl">Recent updates</h1>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default DashboardPage;
