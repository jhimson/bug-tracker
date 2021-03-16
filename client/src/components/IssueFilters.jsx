/* eslint-disable react/button-has-type */
import React from 'react';

const IssueFilters = () => (
  <div className="w-full p-3 bg-gray-200 border-b border-gray-300 filters">
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        <h5 className="font-semibold text-md">Filters:</h5>
        <button className="p-1 px-3 text-xs text-white bg-blue-400 rounded-full focus:outline-none lg:text-sm">
          Assigned to me (1)
        </button>
        <button className="p-1 px-3 text-xs text-white bg-blue-400 rounded-full focus:outline-none lg:text-sm">
          Created by me (1)
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <h5 className="font-semibold text-md">Due date:</h5>
        <button className="p-1 px-3 text-sm text-white bg-blue-400 rounded-full focus:outline-none lg:text-sm">
          All
        </button>
        <button className="p-1 px-3 text-xs text-white bg-blue-400 rounded-full focus:outline-none lg:text-sm">
          4 Days (0)
        </button>
        <button className="p-1 px-3 text-xs text-white bg-blue-400 rounded-full focus:outline-none lg:text-sm">
          Due Today (0)
        </button>
        <button className="p-1 px-3 text-xs text-white bg-blue-400 rounded-full focus:outline-none lg:text-sm">
          Over Due (5)
        </button>
      </div>
    </div>
  </div>
);

export default IssueFilters;
