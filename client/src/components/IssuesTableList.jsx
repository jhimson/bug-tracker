/* eslint-disable react/button-has-type */
import React from 'react';

// icons
import { IoMdArrowUp, IoMdArrowForward, IoMdArrowDown } from 'react-icons/io';
import IssueTableItem from './IssueTableItem';

const IssuesTableList = () => (
  <div className="table w-full p-1 issues">
    <table className="w-full p-5 text-center border">
      <tr className="p-2 border">
        <th className="p-2 border">Key</th>
        <th className="p-2 border">Subject</th>
        <th className="p-2 border">Priority</th>
        <th className="p-2 border">Status</th>
        <th className="p-2 border">Due</th>
      </tr>
      <IssueTableItem
        issueKey="TSYS-2"
        issueSubject="Login page bug"
        issuePriority="High"
        issueStatus="Open"
        issueDueDate="Jan.29"
      />
      <tr className="border">
        <td className="p-1 text-blue-800 border">TSYS-2</td>
        <td className="p-1 font-semibold text-gray-600 border">
          Login page bug
        </td>
        <td className="p-1 border ">
          <div className="flex items-center justify-center">
            <IoMdArrowForward
              size="1.5em"
              color="green"
              className="text-center"
            />
          </div>
        </td>
        <td className="p-1 border">
          <button className="p-1 px-5 text-sm text-white bg-green-500 rounded-full">
            Resolved
          </button>
        </td>
        <td className="p-1 font-semibold text-gray-600 border">Jan.29</td>
      </tr>
      <tr className="border">
        <td className="p-1 text-blue-800 border">TSYS-2</td>
        <td className="p-1 font-semibold text-gray-600 border">
          Login page bug
        </td>
        <td className="p-1 border ">
          <div className="flex items-center justify-center">
            <IoMdArrowDown size="1.5em" color="blue" className="text-center" />
          </div>
        </td>
        <td className="p-1 border">
          <button className="p-1 px-5 text-sm text-white bg-blue-500 rounded-full">
            In Progress
          </button>
        </td>
        <td className="p-1 font-semibold text-gray-600 border">Jan.29</td>
      </tr>
    </table>
  </div>
);

export default IssuesTableList;
