/* eslint-disable react/button-has-type */
import React from 'react';

// Components
import IssueTableItem from './IssueTableItem';

const IssuesTableList = ({ issuesList }) => (
  <div className="table w-full p-1 issues">
    <table className="w-full p-5 text-center border">
      <tr className="p-2 border">
        <th className="p-2 border">Key</th>
        <th className="p-2 border">Subject</th>
        <th className="p-2 border">Priority</th>
        <th className="p-2 border">Status</th>
        <th className="p-2 border">Due</th>
      </tr>
      {issuesList.map((issue) => (
        <IssueTableItem
          issueKey={issue.issueKey}
          issueSubject={issue.issueSubject}
          issuePriority={issue.issuePriority}
          issueStatus={issue.issueStatus}
          issueDueDate={issue.issueDueDate}
        />
      ))}
    </table>
  </div>
);

export default IssuesTableList;
