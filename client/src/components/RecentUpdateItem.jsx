/* eslint-disable no-unreachable */
/* eslint-disable react/button-has-type */
import React from 'react';
// Icons
import { MdComment } from 'react-icons/md';
import { BsFillStarFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

const actionMessage = (action) => {
  switch (action) {
    case 'posted':
      return (
        <p className="font-semibold text-gray-500">
          posted a{' '}
          <span>
            <button className="px-2 font-semibold text-white bg-blue-400 rounded-full focus:outline-none">
              comment
            </button>
          </span>{' '}
          on the issue
        </p>
      );
      break;

    case 'updated':
      return (
        <p className="font-semibold text-gray-500">
          <span>
            <button className="px-2 font-semibold text-white bg-blue-400 rounded-full focus:outline-none">
              updated
            </button>
          </span>{' '}
          the issue
        </p>
      );
      break;

    case 'edited':
      return (
        <p className="font-semibold text-gray-500">
          edited the{' '}
          <span>
            <button className="px-2 font-semibold text-white bg-red-500 rounded-full focus:outline-none">
              members
            </button>
          </span>{' '}
          of this project
        </p>
      );
      break;

    case 'notified':
      return (
        <p className="font-semibold text-gray-500">
          notified{' '}
          <span>
            <button className="px-2 font-semibold text-white bg-blue-400 rounded-full focus:outline-none">
              comment
            </button>
          </span>{' '}
          on the issue
        </p>
      );
      break;

    case 'addedIssue':
      return (
        <p className="font-semibold text-gray-500">
          added a new{' '}
          <span>
            <button className="px-2 font-semibold text-white bg-blue-400 rounded-full focus:outline-none">
              issue
            </button>
          </span>
        </p>
      );
      break;

    case 'addedVM':
      return (
        <p className="font-semibold text-gray-500">
          added a new{' '}
          <span>
            <button className="px-2 font-semibold text-white bg-red-500 rounded-full focus:outline-none">
              Version/Milestone
            </button>
          </span>
        </p>
      );
      break;

    default:
      return <p>WTF</p>;
  }
};

const RecentUpdateItem = ({ projectKey, issueName, userFullname, action }) => (
  <div className="flex justify-between p-2 border-b border-gray-300">
    <div className="flex p-4 space-x-2">
      <div className="user-icon">
        <FaUserCircle size="3.5em" className="text-gray-500" />
      </div>

      <div className="space-y-1">
        <div className="flex justify-between">
          <div className="flex space-x-2">
            <h1 className="mr-1 font-semibold text-gray-500">{userFullname}</h1>
          </div>
          {actionMessage(action)}
        </div>

        <div className="flex items-center space-x-2 issue_description">
          <h1 className="text-sm font-semibold text-blue-400 bg-blue-50 issue_key">
            {projectKey}
          </h1>
          <h1 className="text-sm font-semibold issue_name">{issueName}</h1>
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
);

export default RecentUpdateItem;
