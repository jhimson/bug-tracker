import React from 'react';

// Icons
import { IoIosArrowUp } from 'react-icons/io';

// components
import IssueFilters from './IssueFilters';
import IssuesTableList from './IssuesTableList';

const Issues = () => {
  const issuesList = [
    {
      issueKey: 'TSYS-2',
      issueSubject: 'Login page bug',
      issuePriority: 'High',
      issueStatus: 'Open',
      issueDueDate: 'Jan.29',
    },
    {
      issueKey: 'TSYS-3',
      issueSubject: 'Dashboard page not responsive',
      issuePriority: 'Normal',
      issueStatus: 'In Progress',
      issueDueDate: 'Jan.29',
    },
    {
      issueKey: 'TSYS-4',
      issueSubject: 'Footer un organize',
      issuePriority: 'Low',
      issueStatus: 'Resolved',
      issueDueDate: 'Jan.29',
    },
  ];
  return (
    <div className="w-full p-5">
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
          <IssuesTableList issuesList={issuesList} />
        </div>
      </div>
    </div>
  );
};

export default Issues;
