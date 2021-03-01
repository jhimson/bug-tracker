/* eslint-disable react/button-has-type */
import React from 'react';

// icons
import { IoIosArrowUp, IoMdArrowUp } from 'react-icons/io';

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
      <tr className="border">
        <td className="p-1 text-blue-800 border">TSYS-2</td>
        <td className="p-1 border">Login page bug</td>
        <td className="p-1 border ">
          <div className="flex items-center justify-center">
            <IoMdArrowUp size="1em" color="red" className="text-center" />
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
);

export default IssuesTableList;
