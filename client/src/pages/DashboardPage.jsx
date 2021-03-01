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
import Projects from '../components/Projects';
import RecentUpdates from '../components/RecentUpdates';
import IssueFilters from '../components/IssueFilters';

const DashboardPage = () => (
  <Layout>
    <div className="h-screen bg-gray-100">
      <div className="flex items-start justify-center p-10 space-x-5">
        <div className="flex flex-col w-screen space-y-2">
          <Projects />
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
                <IssueFilters />
                <div className="table w-full p-1 issues">
                  <table className="w-full p-5 text-center border">
                    <tr className="p-2 border">
                      <th className="p-2 border">Key</th>
                      <th className="p-2 border">Subject</th>
                      <th className="p-2 border">Priority</th>
                      <th className="p-2 border">Status</th>
                      <th className="p-2 border">Due</th>
                    </tr>
                    <tr className="border">
                      <td className="p-1 text-blue-800 border">TSYS-2</td>
                      <td className="p-1 border">Login page bug</td>
                      <td className="p-1 border ">
                        <div className="flex items-center justify-center">
                          <IoMdArrowUp
                            size="1em"
                            color="red"
                            className="text-center"
                          />
                        </div>
                      </td>
                      <td className="p-1 border">
                        <button className="p-1 px-5 text-sm text-white bg-red-400 rounded-full">
                          Open
                        </button>
                      </td>
                      <td className="p-1 border">Jan.29</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RecentUpdates />
      </div>
    </div>
  </Layout>
);

export default DashboardPage;
