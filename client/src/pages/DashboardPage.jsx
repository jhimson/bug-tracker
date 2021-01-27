/* eslint-disable react/button-has-type */
import React from 'react';

// Icons
import { AiOutlineFileAdd } from 'react-icons/ai';
import { FcDocument } from 'react-icons/fc';
import { IoIosArrowUp, IoMdArrowUp } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { MdComment } from 'react-icons/md';
import { BsFillStarFill } from 'react-icons/bs';

// Components
import Layout from '../components/Layout';
import ProjectList from '../components/ProjectList';

const DashboardPage = () => (
  <Layout>
    <div className="h-screen bg-gray-100">
      <div className="flex items-start justify-center p-10 space-x-5">
        <div className="flex flex-col w-screen space-y-2">
          <ProjectList />
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
          <div className="bg-white rounded shadow-lg ">
            <div className="px-6 py-2 border-b border-gray-500">
              <h1 className="font-semibold text-md">Sat Jan. 23, 2021</h1>
            </div>
            <div className="flex justify-between p-2">
              <div className="flex p-4 space-x-2">
                <div className="user-icon">
                  <FaUserCircle size="3em" className="text-gray-500" />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between">
                    <div className="flex space-x-2">
                      <h1 className="font-semibold text-gray-500">
                        Jhimson Ray Pamisa
                      </h1>
                      <button className="px-2 font-semibold text-white bg-blue-400 rounded-full focus:outline-none">
                        updated
                      </button>
                      <p className="font-semibold text-gray-500">the issue</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 issue_description">
                    <h1 className="text-sm font-semibold text-blue-400 bg-blue-50 issue_key">
                      TSYS-2
                    </h1>
                    <h1 className="text-sm font-semibold issue_name">
                      Login page bug
                    </h1>
                  </div>
                </div>
              </div>

              <div className="pb-3 pr-3 space-y-2">
                <div className="pt-4">
                  <h1 className="font-semibold text-gray-500">12 hours ago</h1>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 bg-gray-400 rounded-full hover:bg-blue-400 focus:outline-none">
                    <MdComment className="text-white" />
                  </button>
                  <div className="flex items-center px-3 space-x-2 text-yellow-300 bg-gray-400 rounded-full cursor-pointer hover:bg-yellow-400 hover:text-white">
                    <BsFillStarFill />
                    <p>1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default DashboardPage;
