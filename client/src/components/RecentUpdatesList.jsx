/* eslint-disable react/button-has-type */
import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';

// components
import RecentUpdateItem from './RecentUpdateItem';

const RecentUpdatesList = ({ recentUpdatesList }) => (
  <>
    <div className="w-full p-5 ">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <IoIosArrowUp
            size="2em"
            className="mb-2 cursor-pointer hover:text-green-500"
          />
          <h1 className="mb-2 text-lg font-bold">Recent updates</h1>
        </div>
      </div>
      <div className="bg-white rounded shadow-lg">
        <div className="px-6 py-2 border-b border-gray-500">
          <h1 className="font-semibold text-md">Sat Jan. 23, 2021</h1>
        </div>
        {recentUpdatesList.map((updateItem) => (
          <RecentUpdateItem
            projectKey={updateItem.projectKey}
            issueName={updateItem.issueName}
            userFullname={updateItem.userFullname}
            action={updateItem.action}
          />
        ))}
      </div>
    </div>
  </>
);

export default RecentUpdatesList;
