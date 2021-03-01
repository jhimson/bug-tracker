/* eslint-disable no-unreachable */
/* eslint-disable react/button-has-type */
import React from 'react';
import { IoMdArrowUp, IoMdArrowForward, IoMdArrowDown } from 'react-icons/io';

const IssueTableItem = ({
  issueKey,
  issueSubject,
  issuePriority,
  issueStatus,
  issueDueDate,
}) => {
  const priorityArrow = (priority) => {
    switch (priority) {
      case 'High':
        return <IoMdArrowUp size="1.5em" color="red" className="text-center" />;
        break;

      case 'Normal':
        return (
          <IoMdArrowForward
            size="1.5em"
            color="green"
            className="text-center"
          />
        );
        break;

      case 'Low':
        return (
          <IoMdArrowDown size="1.5em" color="blue" className="text-center" />
        );
        break;

      default:
        return <h1>Error!</h1>;
        break;
    }
  };

  const StatusBtnColor = (status) => {
    switch (status) {
      case 'Open':
        return (
          <button className="p-1 px-5 text-sm text-white bg-red-400 rounded-full">
            {status}
          </button>
        );
        break;

      case 'In Progress':
        return (
          <button className="p-1 px-5 text-sm text-white bg-blue-500 rounded-full">
            {status}
          </button>
        );
        break;

      case 'Resolved':
        return (
          <button className="p-1 px-5 text-sm text-white bg-green-500 rounded-full">
            {status}
          </button>
        );
        break;

      case 'Closed':
        return (
          <button className="p-1 px-5 text-sm text-white bg-green-800 rounded-full">
            {status}
          </button>
        );
        break;

      default:
        break;
    }
  };
  return (
    <tr className="border">
      <td className="p-1 text-blue-800 border">{issueKey}</td>
      <td className="p-1 font-semibold text-gray-600 border">{issueSubject}</td>
      <td className="p-1 border ">
        <div className="flex items-center justify-center">
          {priorityArrow(issuePriority)}
        </div>
      </td>
      <td className="p-1 border">{StatusBtnColor(issueStatus)}</td>
      <td className="p-1 font-semibold text-gray-600 border">{issueDueDate}</td>
    </tr>
  );
};

export default IssueTableItem;
