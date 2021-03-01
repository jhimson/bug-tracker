/* eslint-disable react/button-has-type */
import React from 'react';

// components
import RecentUpdateItem from './RecentUpdateItem';

const RecentUpdatesList = () => (
  <>
    <div className="px-6 py-2 border-b border-gray-500">
      <h1 className="font-semibold text-md">Sat Jan. 23, 2021</h1>
    </div>
    <RecentUpdateItem
      projectKey="TSYS"
      issueName="Bug profile"
      userFullname="Jhimson Ray Pamisa"
      action="posted"
    />
    <RecentUpdateItem
      projectKey="TSYS"
      issueName="Bug profile"
      userFullname="Jhimson Ray Pamisa"
      action="posted"
    />
    <RecentUpdateItem
      projectKey="TSYS"
      issueName="Bug profile"
      userFullname="Jhimson Ray Pamisa"
      action="posted"
    />
  </>
);

export default RecentUpdatesList;
