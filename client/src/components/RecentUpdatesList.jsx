/* eslint-disable react/button-has-type */
import React from 'react';

// Icons
import { MdComment } from 'react-icons/md';
import { BsFillStarFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

const RecentUpdatesList = () => (
  <>
    <div className="px-6 py-2 border-b border-gray-500">
      <h1 className="font-semibold text-md">Sat Jan. 23, 2021</h1>
    </div>
    <div className="flex justify-between p-2 border-b border-gray-300">
      <div className="flex p-4 space-x-2">
        <div className="user-icon">
          <FaUserCircle size="3.5em" className="text-gray-500" />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <h1 className="font-semibold text-gray-500">
                Jhimson Ray Pamisa
              </h1>

              <p className="font-semibold text-gray-500">
                Posted a{' '}
                <span>
                  <button className="px-2 font-semibold text-white bg-blue-400 rounded-full focus:outline-none">
                    comment
                  </button>
                </span>{' '}
                on the issue
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 issue_description">
            <h1 className="text-sm font-semibold text-blue-400 bg-blue-50 issue_key">
              TSYS-2
            </h1>
            <h1 className="text-sm font-semibold issue_name">Login page bug</h1>
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
  </>
);

export default RecentUpdatesList;
