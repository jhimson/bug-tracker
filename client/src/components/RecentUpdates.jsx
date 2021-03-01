import React from 'react';
import RecentUpdatesList from './RecentUpdatesList';

const RecentUpdates = () => {
  const recentUpdatesList = [
    {
      projectKey: 'TSYS',
      issueName: 'Bug profile',
      useFullname: 'Jhimson Ray Pamisa',
      action: 'posted',
    },
    {
      projectKey: 'TSYS',
      issueName: 'Bug profile',
      useFullname: 'Jhimson Ray Pamisa',
      action: 'posted',
    },
    {
      projectKey: 'TSYS',
      issueName: 'Bug profile',
      useFullname: 'Jhimson Ray Pamisa',
      action: 'posted',
    },
  ];
  return <RecentUpdatesList recentUpdatesList={recentUpdatesList} />;
};

export default RecentUpdates;
